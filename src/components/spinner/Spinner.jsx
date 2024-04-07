import React from "react";
import { SpinnerContainer } from "./Spinner.styles";

const Spinner = ({ color, size, style, classes }) => {
  return (
    <SpinnerContainer color={color} style={style} className={classes}>
      Hello I am spinner
    </SpinnerContainer>
  );
};

export default Spinner;
