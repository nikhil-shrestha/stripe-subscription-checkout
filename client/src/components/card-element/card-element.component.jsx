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
        <div className="sr-payment-form payment-view">
          <div className="sr-form-row">
            <label for="card-element">Payment details</label>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autocomplete="cardholder"
                className="sr-input"
              />
            </div>
            <br />
            <div className="sr-combo-inputs">
              <div className="sr-combo-inputs-row">
                <CardNumberElement
                  className="sr-input sr-card-element"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onReady={this.handleReady}
                  {...createOptions(this.props.fontSize)}
                />
              </div>
              <div className="sr-combo-inputs-row">
                <CardExpiryElement
                  className="sr-input sr-card-element"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onReady={this.handleReady}
                  {...createOptions(this.props.fontSize)}
                />

                <CardCVCElement
                  className="sr-input sr-card-element"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onReady={this.handleReady}
                  {...createOptions(this.props.fontSize)}
                />
              </div>
            </div>
            <br />

            <input
              type="text"
              name="name"
              placeholder="Name on card"
              className="sr-input"
            />

            <div className="sr-field-error" id="card-errors" role="alert"></div>
          </div>
          <button id="submit">
            <div id="spinner" className="hidden"></div>
            <span id="button-text">Subscribe</span>
          </button>
          <div className="sr-legal-text">
            Your card will be immediately charged
            <span className="order-total">
              ${this.props.planDetails.amount / 100}
            </span>
            .
          </div>
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
