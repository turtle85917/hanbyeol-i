import styled from "styled-components";
import Option from "@components/Option";

const Home: React.FC = () => {
  return <>
    <Hanbyeoli src="/hanbyeols/walk.gif" width={150} />
    <OptionContainer>
      <Option title="지뢰찾기" description="한별이 지뢰찾기" />
    </OptionContainer>
  </>
}

export default Home;

const Hanbyeoli = styled.img`
  position: absolute;
  bottom: 0;
  transform: translateX(0) scaleX(1);
  animation: Walk 20s infinite linear;

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

const OptionContainer = styled.div`
  position: fixed;
  left: 0;
  top: 4em;
  bottom: 4em;
  padding: 0.5em 0;
  padding-left: 70vw;
`;
