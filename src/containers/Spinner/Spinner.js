import React from "react";
import Loader from "react-loader-spinner";
import { Root } from "./Spinner.style";

export default function Spinner() {
  return (
    <Root>
      <Loader type="Bars" color="#243749" height={50} width={50} />
    </Root>
  );
}
