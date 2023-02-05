import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { AnswerState, CorrectState } from "../atoms";
import React, { useEffect, useState } from "react";
interface IMultiple {
  incorrect_answers: string[];
  correct_answer: string;
  setIsAnswered: any;
  setIsCorrect: any;
  isAnswered: any;
}
function Multiple({
  incorrect_answers,
  correct_answer,
  setIsAnswered,
  setIsCorrect,
  isAnswered,
}: IMultiple) {
  const setCorrect = useSetRecoilState(CorrectState);
  const [List, setList] = useState<string[] | null>(null);
  const makeArr = (arr: string[]) => {
    // 배열을 섞습니다
    return arr.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    let arr = [...incorrect_answers, correct_answer];
    setList(makeArr(arr));
  }, []);
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

  return (
    <Div>
      {List?.map((ans, idx) => (
        <Box
          isAnswered={isAnswered}
          ans={ans}
          correct_answer={correct_answer}
          onClick={() => onClick(ans)}
          key={idx}
        >
          {ans}
        </Box>
      ))}
    </Div>
  );
}
export default Multiple;

const Div = styled.div`
  display: grid;
  justify-content: space-around;
  margin: 30px;
  grid-template-columns: repeat(2, 1fr);
`;

const Box = styled.div<{
  isAnswered: any;
  ans: string;
  correct_answer: string;
}>`
  width: 250px;
  height: auto;
  padding: 20px;
  text-align: center;
  background-color: ${(props) =>
    props.isAnswered &&
    (props.ans !== props.correct_answer
      ? props.theme.Danger_2
      : props.theme.Success_2)};
  border-radius: 30px;
  border: 1px solid gray;
  margin: 20px;
`;
