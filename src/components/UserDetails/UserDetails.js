import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Header from "../../containers/Header";
import { GetUser } from "../API/Users";
import { DetailsBox, Image, Title, Text } from "./UserDetails.style";

export default function UserDetails() {
  let { id } = useParams();

  const { data, isLoading } = useQuery(["user", id], () => GetUser(id), {
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <Header enableBack />
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
        <DetailsBox>
          <Image src={data.picture.large} />
          <Title>
            {data.name.title} {data.name.first} {data.name.last}
          </Title>
          <Text>
            {data.dob.date} ({data.dob.age})
          </Text>
          <Text>
            {data.location.country} <br />
            {data.location.city} {data.location.street.name}{" "}
            {data.location.street.number}
          </Text>
          <Text>{data.email}</Text>
          <Text>{data.phone}</Text>
        </DetailsBox>
      )}
    </div>
  );
}
