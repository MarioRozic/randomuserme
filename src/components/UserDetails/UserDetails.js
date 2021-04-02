import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Header from "../../containers/Header";
import Spinner from "../../containers/Spinner";
import { GetUser } from "../API/Users";
import { DetailsBox, Image, Title, Text } from "./UserDetails.style";

export default function UserDetails() {
  let { id } = useParams();

  const { data, isLoading } = useQuery(["user", id], () => GetUser(id), {
    refetchOnWindowFocus: false,
  });

  let birthday;
  if (data) {
    birthday = new Date(data.dob.date);
  }

  return (
    <div>
      <Header enableBack />
      {isLoading ? (
        <Spinner />
      ) : (
        <DetailsBox>
          <Image src={data.picture.large} />
          <Title>
            {data.name.title} {data.name.first} {data.name.last} - (
            {data.dob.age})
          </Title>
          <Text>
            {birthday.getDate()}/{birthday.getMonth() + 1}/
            {birthday.getFullYear()}
          </Text>
          <Text>
            {data.location.country} {data.location.city}
            <br /> {data.location.street.name} {data.location.street.number}
          </Text>
          <Text>{data.email}</Text>
          <Text>{data.phone}</Text>
        </DetailsBox>
      )}
    </div>
  );
}
