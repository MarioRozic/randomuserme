import React from "react";
import { useQuery, useQueryClient } from "react-query";
import Header from "../../containers/Header";
import Spinner from "../../containers/Spinner";
import UserCard from "../../containers/UserCard";
import { Container } from "../../index.style";

import { GetUser, GetUserList } from "../API/Users";
import { UserListBox } from "./UserList.style";

export default function UserList() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("userList", GetUserList, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <UserListBox>
            {data.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                handleHover={() => {
                  queryClient.prefetchQuery(
                    ["user", user.uuid],
                    () => GetUser(user.uuid),
                    {
                      staleTime: 50000,
                    }
                  );
                }}
              />
            ))}
          </UserListBox>
        )}
      </Container>
    </>
  );
}
