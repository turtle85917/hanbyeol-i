import React from "react";
import styled from "styled-components";

export default class Navigation extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Container>
        <Profile src="/hanbyeols/h1.png" />
        <LeftTitle>( ͡° ͜ʖ ͡°)</LeftTitle>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  max-height: 10em;
  background-color: #f5f5f5;
`;

const Profile = styled.img`
  position: absolute;
  width: 40px;
  border-radius: 9999px;
  margin: 0.5em 0.5em 0.5em;
`;

const LeftTitle = styled.h2`
  padding: 0.5em 2.5em 0.5em;
`;
