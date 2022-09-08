import styled from "styled-components";

const Glyph = styled.img`
  height: 1em;
  vertical-align: baseline;
`;

export default function LogoGlyph() {
  return <Glyph src="/bitshift-white-transparent-vector.svg" alt="b" />;
}
