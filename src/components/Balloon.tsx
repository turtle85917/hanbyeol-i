import React from "react";
import styled, { css } from "styled-components";

interface P {
  position: [number, number];
  content: string;
}

export default class Bubble extends React.Component<P> {
  constructor(props: P) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Container position={this.props.position}>{this.props.content}</Container>
    )
  }
}

const Container = styled.div<{ position: [number, number] }>`
  position: absolute;
  margin: 50px;
  width: 400px;
  height: 50px;
  background: var(--hanbyeol-pink);
  border-radius: 10px;
  padding: 0.5em;
  ${(props) => css`
    left: ${props.position[0]}px;
    bottom: ${props.position[1]}px;
  `}

  &:after {
    content: "";
    position: absolute;
    left: 200px;
    bottom: -15px;
    border-top: 15px solid var(--hanbyeol-pink);
    border-left: 15px solid transparent;
  }
`;
