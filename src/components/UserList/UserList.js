import React from "react";
import Header from "../../containers/Header";
import UserCard from "../../containers/UserCard";

export default function UserList() {
  return (
    <div>
      <Header />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
