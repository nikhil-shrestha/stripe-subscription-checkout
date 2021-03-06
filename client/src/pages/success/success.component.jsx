import React from 'react';

const success = props => {
  return (
    <React.Fragment>
      <div className="sr-main" style={{ display: 'flex' }}>
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <div className="sr-payment-summary completed-view">
          <h1>Your payment succeeded</h1>
          <h4>View CheckoutSession response:</h4>
          <div className="sr-section completed-view">
            <div className="sr-callout">
              <pre />
            </div>
            <button onclick="window.location.href = '/';">Restart demo</button>
          </div>
        </div>
      </div>
      <div className="sr-content">
        <div className="pasha-image-stack">
          <img
            src="https://picsum.photos/280/320?random=1"
            width="140"
            height="160"
          />
          <img
            src="https://picsum.photos/280/320?random=2"
            width="140"
            height="160"
          />
          <img
            src="https://picsum.photos/280/320?random=3"
            width="140"
            height="160"
          />
          <img
            src="https://picsum.photos/280/320?random=4"
            width="140"
            height="160"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default success;
