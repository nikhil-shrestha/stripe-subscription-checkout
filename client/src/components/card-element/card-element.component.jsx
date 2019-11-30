import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  StripeProvider,
  Elements,
  injectStripe
} from 'react-stripe-elements';

// import './stripe-checkout.styles.css';

class _SplitForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  handleBlur = () => {
    console.log('[blur]');
  };
  handleChange = change => {
    console.log('[change]', change);
  };
  handleClick = () => {
    console.log('[click]');
  };
  handleFocus = () => {
    console.log('[focus]');
  };
  handleReady = () => {
    console.log('[ready]');
  };
  render() {
    const createOptions = (fontSize, padding) => {
      return {
        style: {
          base: {
            fontSize,
            color: '#424770',
            letterSpacing: '0.025em',
            fontFamily: 'Source Code Pro, monospace',
            '::placeholder': {
              color: '#aab7c4'
            },
            padding
          },
          invalid: {
            color: '#9e2146'
          }
        }
      };
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label>Card Details</label>
          <div class="input-group input-group-lg">
            <CardNumberElement
              className="form-control sr-card-element"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onReady={this.handleReady}
              {...createOptions(this.props.fontSize)}
            />
            <div class="input-group">
              <CardExpiryElement
                className="form-control sr-card-element"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onReady={this.handleReady}
                {...createOptions(this.props.fontSize)}
              />

              <CardCVCElement
                className="form-control sr-card-element"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onReady={this.handleReady}
                {...createOptions(this.props.fontSize)}
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">Name on Card</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            placeholder="Enter Name"
          />
        </div>
        <button type="submit" className="btn btn-info btn-block">
          <div id="spinner"></div>
          <span id="button-text">Subscribe</span>
        </button>
        <div className="text-center">
          <p class="text-muted">Your card will be immediately charged</p>
        </div>
      </form>
    );
  }
}
const SplitForm = injectStripe(_SplitForm);

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px'
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({ elementFontSize: '14px' });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({ elementFontSize: '18px' });
      }
    });
  }

  render() {
    const { elementFontSize } = this.state;
    return (
      <div className="Checkout">
        <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
          <Elements>
            <SplitForm fontSize={elementFontSize} {...this.props} />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Checkout;
