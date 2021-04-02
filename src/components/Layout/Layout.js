import React from "react";
import { Route, Switch } from "react-router-dom";
import UserList from "../UserList";
import UserDetails from "../UserDetails";

export default function Layout() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route path="/user-details">
          <UserDetails />
        </Route>
      </Switch>
    </div>
  );
}
