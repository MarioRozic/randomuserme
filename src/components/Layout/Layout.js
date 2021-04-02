import React from "react";
import { Route, Switch } from "react-router-dom";
import UserList from "../UserList";
import UserDetails from "../UserDetails";

export default function Layout() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route path="/user-details/:id">
          <UserDetails />
        </Route>
      </Switch>
    </>
  );
}
