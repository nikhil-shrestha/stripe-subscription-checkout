import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './pages/sign-in/sign-in.component';
import Signup from './pages/sign-up/sign-up.component';
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import Subscription from './pages/subscription/subscription.component';
import Success from './pages/success/success.component';
import Canceled from './pages/cancelled/canceled.component';
import Checkout from './pages/checkout/checkout.component';
import Dashboard from './pages/dashboard/dashboard.component';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/subscription" component={Subscription} />
      <Route exact path="/checkout/:plan_id" component={Checkout} />
      {/* <Route exact path="/success" component={Success} />
        <Route exact path="/canceled" component={Canceled} /> */}
    </Switch>
  );
}

export default App;
