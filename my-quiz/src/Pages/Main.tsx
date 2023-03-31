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
      <h3>✌️🧚‍♀️스피드퀴즈🧜‍♀️🏃‍♀️</h3>

      <Link to={"/question"}>
        <Button>시작하기!</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  height: 100%;
`;

const Button = styled.div`
  background-color: #f7d794;
  color: #596275;
  border: none;
  width: 350px;
  height: 60px;
  margin: 100px;
  padding: 16px;
  text-align: center;
`;
export default Main;
