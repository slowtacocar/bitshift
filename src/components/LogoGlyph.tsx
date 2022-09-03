import styled from "styled-components";
import logo from "../images/bitshift-white-transparent-vector.svg";
import * as React from "react";

const Glyph = styled.img`
  height: 1em;
  vertical-align: baseline;
`;

export default function LogoGlyph() {
  return <Glyph src={logo} alt="b" />;
}
