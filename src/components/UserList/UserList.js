import React from "react";
import { useQuery } from "react-query";
import Header from "../../containers/Header";
import Spinner from "../../containers/Spinner";
import UserCard from "../../containers/UserCard";

import { GetUserList } from "../API/Users";

export default function UserList() {
  const { data, isLoading } = useQuery("userList", GetUserList, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return (
    <div>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
