import React from "react";
import { useQuery, useQueryClient } from "react-query";
import Header from "../../containers/Header";
import Spinner from "../../containers/Spinner";
import UserCard from "../../containers/UserCard";

import { GetUser, GetUserList } from "../API/Users";

export default function UserList() {
  const queryClient = useQueryClient();

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
            <UserCard
              key={index}
              user={user}
              handleHover={() => {
                queryClient.prefetchQuery(
                  ["user", user.id],
                  () => GetUser(user.id),
                  {
                    staleTime: 50000,
                  }
                );
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
