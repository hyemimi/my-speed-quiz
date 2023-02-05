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
  const [isAnswered, setIsAnswered] = useState<boolean | null>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  return (
    <Card>
      <Header>
        <H3>({count}/10)</H3>
        <CaptionDiv>
          <Caption>{difficulty}</Caption>
          <Caption>{category}</Caption>
        </CaptionDiv>
        <h1>{question}</h1>
      </Header>
      {type === "boolean" ? (
        <Ox
          correct_answer={correct_answer}
          setIsAnswered={setIsAnswered}
          setIsCorrect={setIsCorrect}
          isAnswered={isAnswered}
        />
      ) : (
        <Multiple
          incorrect_answers={incorrect_answers}
          correct_answer={correct_answer}
          setIsAnswered={setIsAnswered}
          setIsCorrect={setIsCorrect}
          isAnswered={isAnswered}
        />
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
  text-align: center;
`;

const Header = styled.div`
  height: 250px;
  width: 1000px;
  margin-bottom: 40px;
`;
const CaptionDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const H3 = styled.h3`
  padding: 10px;
  margin: 30px;
`;
const Caption = styled.caption`
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
