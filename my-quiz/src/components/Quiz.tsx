import { IQuestion } from "../routes/Pages/Question";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AnswerState, CountState } from "../atoms";
import styled from "styled-components";
import Multiple from "./Multiple";
import Ox from "./Ox";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NextButton from "./NextButton";
export default function Quiz({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}: IQuestion) {
  const navigate = useNavigate();
  const count = useRecoilValue(CountState);

  const [checked, setChecked] = useState<null | number>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  return (
    <Card>
      <h3>{count}/10</h3>
      <CaptionDiv>
        <Caption>{difficulty}</Caption>
        <Caption>{category}</Caption>
      </CaptionDiv>
      <h1>{question}</h1>
      {type === "boolean" ? (
        <Ox
          correct_answer={correct_answer}
          setIsAnswered={setIsAnswered}
          setIsCorrect={setIsCorrect}
        />
      ) : (
        <Multiple />
      )}
      {isCorrect === true && (
        <caption style={{ color: "#33b54a" }}>Correct!</caption>
      )}
      {isCorrect === false && (
        <caption style={{ color: "#ff1d25" }}>
          Answer was '{correct_answer}' :P
        </caption>
      )}
      {isAnswered && <NextButton />}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CaptionDiv = styled.div`
  display: flex;
  margin: 0 auto;
`;
const Caption = styled.div`
  width: 100%;
  height: 100%;
`;
export const Button = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.Primary_1};
  width: 350px;
  height: 60px;
  margin-top: 50px;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;

/*(
        <caption style={{ color: "#ff1d25" }}>
          Answer was '{correct_answer}' :P
        </caption>
      ) */
