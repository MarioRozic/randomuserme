import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Header from "../../containers/Header";
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
        <span>Loading...</span>
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
