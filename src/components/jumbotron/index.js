import React from "react";
import { Inner } from "./styles/jumbotron";

export default function Jumbotron({
  childern,
  direction = "row",
  ...restProps
}) {
  return (
    <Inner direction={direction}>
      <p>Hello Again</p>
    </Inner>
  );
}
