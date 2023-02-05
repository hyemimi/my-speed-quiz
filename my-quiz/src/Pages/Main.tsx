import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CorrectState, CountState, FlagState, TimeState } from "../atoms";
import { useEffect } from "react";
function Main() {
  const setCorrect = useSetRecoilState(CorrectState);
  const setCount = useSetRecoilState(CountState);
  const setFlag = useSetRecoilState(FlagState);
  const setTime = useSetRecoilState(TimeState);

  useEffect(() => {
    setCorrect(0);
    setCount(1);
    setFlag(false);
    setTime(0);
  }, []);
  return (
    <Container>
      <h3>프로그라피 8기 과제 퀴즈</h3>
      <Link to={"/question"}>
        <Button>시작하기!</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  width: 100%;
`;

const Button = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.Primary_1};
  width: 350px;
  height: 60px;
  margin: 100px;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
`;
export default Main;
