import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from 'history.js';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import User from "layouts/User.js";

// views without layouts
import Profile from "views/Profile.js";
import Login from "views/auth/Login.js";

// Route
import ProtectedRoute from 'routes/ProtectedRoute.js';
import AuthRoute from 'routes/AuthRoute.js';

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {/* add routes with layouts */}
      <ProtectedRoute path="/admin" component={Admin} allowedRoles={['Admin']} />
      <AuthRoute path="/auth" component={Auth}/>
      <ProtectedRoute path="/user" component={User} allowedRoles={['User']} />
      {/* add routes without layouts */}
      <Route path="/profile" exact component={Profile} />
      <Route path="/auth/login" exact component={Login} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/auth/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
