import React from "react";
import { useHistory } from "react-router-dom";

import {
  CardBox,
  CardContent,
  CardImage,
  CardText,
  Image,
} from "./UserCard.style";

export default function UserCard({ user: { picture, name, id }, handleHover }) {
  let history = useHistory();

  function handleClick() {
    history.push(`/user-details/${id}`);
  }
  return (
    <CardBox onClick={handleClick} onMouseEnter={handleHover}>
      <CardImage>
        <Image src={picture.medium} alt="Userimage" />
      </CardImage>
      <CardText>
        <CardContent isTitle>{name.title}</CardContent>
        <CardContent>{name.first}</CardContent>
        <CardContent>{name.last}</CardContent>
      </CardText>
    </CardBox>
  );
}
