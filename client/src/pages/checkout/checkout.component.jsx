import React, { useEffect, useState } from 'react';
import axios from 'axios';

import StripeCardElement from '../../components/card-element/card-element.component';

const Checkout = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [planDetails, setPlanDetails] = useState(null);
  useEffect(() => {
    console.log('checkout');
    const planId = match.params.plan_id;
    setLoading(true);
    async function fetchData() {
      const res = await axios.get(`/api/stripe/plans/retrieve/${planId}`);
      setPlanDetails(res.data);
      setLoading(false);
      console.log('response::', res);
    }
    fetchData();
  }, []);

  return planDetails !== null && !loading ? (
    <React.Fragment>
      <div className="sr-main" style={{ display: 'flex' }}>
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <div className="sr-payment-summary payment-view">
          <h1 className="order-amount">$ {planDetails.amount / 100}</h1>
          <h4>Subscribe to the {planDetails.nickname}</h4>
        </div>

        <StripeCardElement planDetails={planDetails} />
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
  ) : (
    'loading'
  );
};

export default Checkout;
