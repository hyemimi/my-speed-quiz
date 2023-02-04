import { useRecoilValue } from "recoil";
import { CorrectState } from "../../atoms";
import { Button } from "../../components/Quiz";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Result() {
  const correct = useRecoilValue(CorrectState);
  const navigate = useNavigate();
  return (
    <Div>
      <h1>퀴즈 결과</h1>
      <h3>10문제 중 {correct}문제를 맞추셨습니다! </h3>
      <Button onClick={() => navigate("/")}>재도전!</Button>
    </Div>
  );
}

const Div = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export default Result;
