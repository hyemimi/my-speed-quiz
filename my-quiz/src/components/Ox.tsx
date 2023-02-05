import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { AnswerState, CorrectState, TimeState } from "../atoms";
import { useState, useEffect } from "react";
export default function Ox({
  correct_answer,
  setIsCorrect,
  setIsAnswered,
  isAnswered,
}: any) {
  const setCorrect = useSetRecoilState(CorrectState);
  const [time, setTime] = useState(0);
  const setTotal = useSetRecoilState(TimeState);

  const onClick = (tag: string) => {
    if (isAnswered === false) {
      if (tag === correct_answer) {
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
      <Box onClick={() => onClick("True")} color="green">
        True
      </Box>
      <Box onClick={() => onClick("False")}>False</Box>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: 80px;
`;

const Box = styled.div`
  align-items: center;
  width: 200px;
  height: 80px;
  background-color: ${(props) => (props.color ? props.color : "red")};
  cursor: pointer;
  font-size: 40px;
  padding: 20px;
  justify-content: center;
`;
