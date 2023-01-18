import React from "react";
import styled from "styled-components";

export default class Option extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Container>
        <h1>ASDF</h1>
        <p>그냥 눌러보는 거시와요</p>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 35em;
  height: 5em;
  padding-left: 5em;
  background-color: white;
  margin-bottom: 1em;
  transition: 500ms;
  cursor: pointer;

  &:hover {
    margin-left: -2em;
  }
`;
