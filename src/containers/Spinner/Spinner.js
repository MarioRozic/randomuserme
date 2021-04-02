import React from "react";
import Loader from "react-loader-spinner";
import { Root } from "./Spinner.style";

export default function Spinner({ size, type }) {
  return (
    <Root>
      <Loader
        type={type ? "TailSpin" : "Bars"}
        color="#243749"
        height={size ? size : 50}
        width={size ? size : 50}
      />
    </Root>
  );
}
