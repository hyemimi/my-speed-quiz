import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "../../api";
import Quiz from "../../components/Quiz";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CountState, FlagState, TimeState } from "../../atoms";
import styled from "styled-components";
import Progressbar from "../../components/Progressbar";
import { useRef } from "react";
export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

function Question() {
  const [quizlist, setQuizList] = useState<null | IQuestion[]>(null);
  /* const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false); */
  const count = useRecoilValue(CountState);
  const [timer, setTimer] = useRecoilState(TimeState);
  const [flag, setFlag] = useRecoilState(FlagState);
  useEffect(() => {
    fetchQuestions().then((res) => setQuizList(res.data.results));
    setFlag(true);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [flag, timer]);

  return (
    <>
      {timer}
      <Wrapper>
        {quizlist?.map(
          (quiz, idx) => idx + 1 === count && <Quiz key={count} {...quiz} />
        )}
      </Wrapper>
    </>
  );
}

export default Question;
const Wrapper = styled.div`
  width: 1000px;
  height: 700px;
  max-width: 1000px;
`;
