import React from "react";
import styled, { css } from "styled-components";
import Bubble from "@components/Balloon";

type animationName = "walk" | "cry";
interface S {
  animName: animationName;
  mouseX: number;
}

export default class Hanbyeoli extends React.Component<{}, S> {
  constructor(props: {}) {
    super(props);

    this.state = {
      animName: "walk",
      mouseX: 0
    }
  }

  animManager(animName: animationName) {
    const hanbyeol = document.querySelector("img#hanbyeol");
    if (hanbyeol !== null) {
      const animation = hanbyeol.getAnimations()[0];
      if (animation !== undefined) {
        if (animName === "walk") animation.play();
        else animation.pause();
      }
    }
  }

  changeAnimName(animName: animationName) {
    this.setState({ animName });
    this.animManager(animName);
  }

  componentDidMount(): void {
    document.addEventListener("mousedown", (event) => {
      this.setState({ mouseX: event.screenX });
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <Container src={`/hanbyeols/${this.state.animName}.gif`} width={150} id="hanbyeol"
        onClick={() => this.changeAnimName("cry")}
        onMouseLeave={() => this.changeAnimName("walk")}
        animName={this.state.animName}
        />
        {this.state.animName === "cry" && <Bubble content={"으에에~ 저 맛없어요! ㅠㅠ"} position={[this.state.mouseX/2+150, 150]} />}
      </>
    )
  }
}

const Container = styled.img<{ animName: animationName }>`
  position: absolute;
  bottom: 0;
  -webkit-user-drag: none;
  animation: Walk 20s infinite linear;
  ${(props) => {
    if (props.animName === "walk") return css`
      transform: translateX(0) scaleX(1);
      bottom: 0;
    `;
    if (props.animName === "cry") return css`
      bottom: 3em;
    `;
  }}

  @keyframes Walk {
    0% {
      transform: translateX(0) scaleX(1);
    }

    50% {
      transform: translateX(calc(100vw - 150px)) scaleX(1);
    }

    51% {
      transform: translateX(calc(100vw - 150px)) scaleX(-1);
    }

    99% {
      transform: translateX(0) scaleX(-1);
    }

    100% {
      transform: translateX(0) scaleX(1);
    }
  }
`;
