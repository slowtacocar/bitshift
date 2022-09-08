import styled from "styled-components";

export default styled.button`
  border: 2px solid white;
  padding: 1rem;
  background: none;
  color: white;
  font-size: 1.5rem;
  transition: color, background 0.5s;
  text-decoration: none;

  :hover {
    background: white;
    color: black;
  }
`;
