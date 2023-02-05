import { useRecoilValue } from "recoil";
import { CorrectState, TimeState } from "../../atoms";
import { Button } from "../../components/Quiz";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Result() {
  const total = useRecoilValue(TimeState);

  const correct = useRecoilValue(CorrectState);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <H3>퀴즈 결과</H3>
      10문제 중 {correct}문제를 맞추셨습니다!
      <caption>
        (총 소요시간 : {Math.floor(total / 60)}분 {total % 60}초)
      </caption>
      <Button onClick={() => navigate("/")}>재도전!</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  height: 500px;
  max-width: 1000px;
  display: flex;
  padding: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H3 = styled.h3`
  margin-bottom: 70px;
`;

export default Result;
