const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// @route   GET api/stripe/setup
// @desc    Check environment variables
// @access  Public
router.get('/setup', (req, res) => {
  res.send({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    basicPlan: process.env.BASIC_PLAN_ID,
    proPlan: process.env.PRO_PLAN_ID
  });
});

// @route   GET api/stripe/plans/retrieve
// @desc    Check environment variables
// @access  Public
router.get('/plans/retrieve/:planId', async (req, res) => {
  try {
    const plan = await stripe.plans.retrieve(req.params.planId);
    res.send(plan);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/stripe/checkout-session
// @desc    Fetch the Checkout Session to display the JSON result on the success page
// @access  Public
router.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

// @route   GET api/stripe/create-checkout-session
// @desc    Fetch the Checkout Session to display the JSON result on the success page
// @access  Public
router.post('/create-checkout-session', async (req, res) => {
  const domainURL = process.env.DOMAIN;
  const { planId } = req.body;

  console.log('planId::', planId);

  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the form
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    subscription_data: { items: [{ plan: planId }] },
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled`
  });

  res.send({
    sessionId: session.id
  });
});

// @route   GET api/stripe/subscription/create
// @desc    Fetch the Checkout Session to display the JSON result on the success page
// @access  Public
router.post('/subscription/create', async (req, res) => {
  const { planId, token, recurring, timestamp } = req.body;
  // Check for a POSTed stripeToken and subscription
  try {
    const email = token.email;

    const stripeCustomer = await stripe.customers.create({
      email,
      description: `Customer for ${email}`,
      source: token.id
    });
    console.log('stripeCustomer::', stripeCustomer);

    const body = {
      customer: stripeCustomer.id,
      items: [{ plan: planId }]
    };

    if (recurring) {
      body.billing_cycle_anchor = timestamp;
    } else {
      body.cancel_at_period_end = true;
    }

    console.log('before subscrption::', body);

    const subscription = await stripe.subscriptions.create(body);

    console.log('subscription::', subscription);

    res.json({ message: `Thanks! You've subscribed to the ${plan} plan.` });
  } catch (err) {
    console.log('error::', err);
    let msg;
    switch (err.type) {
      case 'StripeCardError':
        // A declined card error
        msg = err.message; // => e.g. "Your card's expiration year is invalid."
        break;
      case 'StripeInvalidRequestError':
        // Invalid parameters were supplied to Stripe's API
        msg = err.message;
        break;
      case 'StripeAPIError':
        // An error occurred internally with Stripe's API
        msg = err.message;
        break;
      case 'StripeConnectionError':
        // Some kind of error occurred during the HTTPS communication
        msg = err.message;
        break;
      case 'StripeAuthenticationError':
        // You probably used an incorrect API key
        msg = err.message;
        break;
      case 'StripeRateLimitError':
        // Too many requests hit the API too quickly
        msg = err.message;
        break;
      case 'StripePermissionError':
        // Access to a resource is not allowed
        msg = err.message;
        break;
      case 'StripeIdempotencyError':
        // An idempotency key was used improperly
        msg = err.message;
        break;
      case 'StripeInvalidGrantError':
        // InvalidGrantError is raised when a specified code doesn't exist, is
        // expired, has been used, or doesn't belong to you; a refresh token doesn't
        // exist, or doesn't belong to you; or if an API key's mode (live or test)
        // doesn't match the mode of a code or refresh token.
        msg = err.message;
        break;
    }

    res.status(500).send(msg);
  }
});

// @route   GET api/stripe/subscription/update
// @desc    Fetch the Checkout Session to display the JSON result on the success page
// @access  Public
router.post('/subscription/update/:subscriptionId', async (req, res) => {
  try {
    const subscription = await stripe.subscriptions.retrieve(
      req.params.subscriptionId
    );
    stripe.subscriptions.update('sub_49ty4767H20z6a', {
      cancel_at_period_end: false,
      items: [
        {
          id: subscription.items.data[0].id,
          plan: 'plan_CBb6IXqvTLXp3f'
        }
      ]
    });
    res.send(subscription);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/stripe/create-checkout-session
// @desc    Fetch the Checkout Session to display the JSON result on the success page
// @access  Public
router.post('/create-checkout-session', async (req, res) => {
  const domainURL = process.env.DOMAIN;
  const { planId } = req.body;

  console.log('planId::', planId);

  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the form
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    subscription_data: { items: [{ plan: planId }] },
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled`
  });

  res.send({
    sessionId: session.id
  });
});

// @route   GET api/stripe/webhook
// @desc    Webhook handler for asynchronous events.
// @access  Public
router.post('/webhook', async (req, res) => {
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
});

module.exports = router;
