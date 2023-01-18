import styled from "styled-components";
import Option from "@components/Option";
import Hanbyeoli from "@components/Hanbyeoli";

const Home: React.FC = () => {
  return <>
    <Hanbyeoli />
    <OptionContainer>
      <Option title="지뢰찾기" description="한별이 지뢰찾기" />
    </OptionContainer>
  </>
}

export default Home;

const OptionContainer = styled.div`
  position: fixed;
  left: 0;
  top: 4em;
  bottom: 4em;
  padding: 0.5em 0;
  padding-left: 70vw;
  -webkit-user-drag: none;
`;
