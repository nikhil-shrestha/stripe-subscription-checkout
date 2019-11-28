import React from 'react';
import axios from 'axios';

const subscription = ({ history }) => {
  const onSelectPlan = plan => {
    console.log('plan::', plan);
    axios.post('/api/stripe/create-checkout-session', {
      planId: plan
    });
    // history.push(`/checkout/${plan}`);
  };
  return (
    <React.Fragment>
      <div className="sr-main" style={{ display: 'flex' }}>
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <div className="sr-container">
          <section className="container basic-photo">
            <div>
              <h1>Basic subscription</h1>
              <h4>1 photo per week</h4>
              <div className="pasha-image">
                <img
                  src="https://picsum.photos/280/320?random=4"
                  width="140"
                  height="160"
                />
              </div>
            </div>
            <button
              id="basic-plan-btn"
              onClick={() => onSelectPlan('plan_GGCiVKaRLBWLWa')}
            >
              $5.00 per week
            </button>
          </section>
          <section className="container pro-photo">
            <div>
              <h1>Pro subscription</h1>
              <h4>3 photos per week</h4>
              <div className="pasha-image-stack">
                <img
                  src="https://picsum.photos/280/320?random=1"
                  width="105"
                  height="120"
                  alt="Sample Pasha image 1"
                />
                <img
                  src="https://picsum.photos/280/320?random=2"
                  width="105"
                  height="120"
                  alt="Sample Pasha image 2"
                />
                <img
                  src="https://picsum.photos/280/320?random=3"
                  width="105"
                  height="120"
                  alt="Sample Pasha image 3"
                />
              </div>
            </div>
            <button
              id="pro-plan-btn"
              onClick={() => onSelectPlan('plan_GGCl74YUQLh2tv')}
            >
              $14.00 per week
            </button>
          </section>
        </div>
        <div id="error-message"></div>
      </div>
    </React.Fragment>
  );
};

export default subscription;
