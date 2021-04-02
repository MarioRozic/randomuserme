import React from "react";
import {
  CardBox,
  CardContent,
  CardImage,
  CardText,
  Image,
} from "./UserCard.style";

// user:
// dob: {date: "1962-04-04T10:35:32.692Z", age: 59}
// email: "aynz.nkwnzr@example.com"
// id: "2c52e9f64b2d5b67"
// location:
// city: "ارومیه"
// coordinates: {latitude: "30.8147", longitude: "139.3170"}
// country: "Iran"
// postcode: 85755
// state: "کردستان"
// street: {number: 8477, name: "دماوند"}
// timezone: {offset: "+1:00", description: "Brussels, Copenhagen, Madrid, Paris"}
// __proto__: Object
// login:
// md5: "5a6077ff6ae1fc3dcad18d88873a02f4"
// password: "child"
// salt: "g5eQRq5r"
// sha1: "6775b1dde85e972d9c33f71301fc81bf3cbfc7ab"
// sha256: "64fac8dd4dda83d6a9db7d530da8f055e7cfbc8dca9ad91315bc8bcb84e8418a"
// username: "goldenkoala319"
// uuid: "2b47d41c-d1e1-4bb4-a435-735e83286c77"
// __proto__: Object
// name:
// first: "آیناز"
// last: "نكو نظر"
// title: "Miss"
// __proto__: Object
// phone: "011-54744808"
// picture:
// large: "https://randomuser.me/api/portraits/women/52.jpg"
// medium: "https://randomuser.me/api/portraits/med/women/52.jpg"
// thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg"

export default function UserCard({ user: { picture, name } }) {
  return (
    <CardBox>
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
