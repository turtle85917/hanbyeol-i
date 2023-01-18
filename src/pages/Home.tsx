import Option from "@components/Option";
import styled from "styled-components";

const Home: React.FC = () => {
  return <>
    <OptionContainer>
      <Option />
      <Option />
      <Option />
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
`;
