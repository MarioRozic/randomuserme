import React from "react";
import {
  CardBox,
  CardContent,
  CardImage,
  CardText,
  Image,
} from "./UserCard.style";

export default function UserCard() {
  return (
    <CardBox>
      <CardImage>
        <Image
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="Userimage"
        />
      </CardImage>
      <CardText>
        <CardContent width="30px">Mr</CardContent>
        <CardContent>Joe</CardContent>
        <CardContent>Doe</CardContent>
      </CardText>
    </CardBox>
  );
}
