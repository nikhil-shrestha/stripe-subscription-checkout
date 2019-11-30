import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Signin from './pages/sign-in/sign-in.component';
import Signup from './pages/sign-up/sign-up.component';
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import Subscription from './pages/subscription/subscription.component';
import Success from './pages/success/success.component';
import Canceled from './pages/cancelled/canceled.component';
import Checkout from './pages/checkout/checkout.component';

function App() {
  return (
    <div className="sr-root">
      <Header />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        {/* <Route exact path="/" component={Subscription} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/canceled" component={Canceled} />
        <Route exact path="/checkout/:plan_id" component={Checkout} /> */}
      </Switch>
    </div>
  );
}

export default App;
