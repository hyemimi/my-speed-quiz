import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { AnswerState, CorrectState } from "../atoms";
import { useEffect, useState } from "react";
interface IMultiple {
  incorrect_answers: string[];
  correct_answer: string;
  setIsAnswered: any;
  setIsCorrect: any;
  isAnswered: any;
}
export default function Multiple({
  incorrect_answers,
  correct_answer,
  setIsAnswered,
  setIsCorrect,
  isAnswered,
}: IMultiple) {
  const setCorrect = useSetRecoilState(CorrectState);
  const arr = [...incorrect_answers, correct_answer];
  const makeArr = (arr: string[]) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  const List = makeArr(arr);
  const onClick = (answer: string) => {
    if (isAnswered === false) {
      if (answer === correct_answer) {
        setIsCorrect(true);
        setCorrect((prev) => prev + 1);
      } else {
        setIsCorrect(false);
      }
      setIsAnswered(true);
    }
  };
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isAnswered) {
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }, [time]);
  console.log(time);
  return (
    <Div>
      {List.map((ans, idx) => (
        <Box onClick={() => onClick(ans)} key={idx}>
          {ans}
        </Box>
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  justify-content: space-around;
  margin: 30px;
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
