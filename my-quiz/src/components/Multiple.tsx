import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { AnswerState, CorrectState } from "../atoms";
interface IMultiple {
  incorrect_answers: string[];
  correct_answer: string;
  setIsAnswered: any;
  setIsCorrect: any;
}
export default function Multiple({
  incorrect_answers,
  correct_answer,
  setIsAnswered,
  setIsCorrect,
}: IMultiple) {
  const setCorrect = useSetRecoilState(CorrectState);
  const onClick = (answer: string) => {
    if (answer === correct_answer) {
      setIsCorrect(true);
      setCorrect((prev) => prev + 1);
    } else {
      setIsCorrect(false);
    }
    setIsAnswered(true);
  };
  return (
    <Div>
      {incorrect_answers.map((ans, idx) => (
        <Box onClick={() => onClick(ans)} key={idx}>
          {ans}
        </Box>
      ))}
      <Box onClick={() => onClick(correct_answer)}>{correct_answer}</Box>
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  justify-content: space-around;
  margin: 70px;
  grid-template-columns: repeat(2, 1fr);
`;

const Box = styled.div`
  width: 250px;
  height: 60px;
  padding: 20px;
  text-align: center;

  border-radius: 30px;
  border: 1px solid gray;
  margin: 20px;
`;
