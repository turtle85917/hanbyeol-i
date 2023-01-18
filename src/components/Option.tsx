import React from "react";
import styled from "styled-components";

interface P {
  title: string;
  description: string;
}

export default class Option extends React.Component<P> {
  constructor(props: P) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Container>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 40em;
  height: 4.5em;
  padding-left: 5em;
  background-color: white;
  margin-bottom: 1em;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    margin-left: -2em;
  }
`;
