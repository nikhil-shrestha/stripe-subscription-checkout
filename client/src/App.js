import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Subscription from './pages/subscription/subscription.component';
import Success from './pages/success/success.component';
import Canceled from './pages/cancelled/canceled.component';
import Checkout from './pages/checkout/checkout.component';

function App() {
  return (
    <div className="sr-root">
      <Switch>
        <Route exact path="/" component={Subscription} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/canceled" component={Canceled} />
        <Route exact path="/checkout/:plan_id" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
