import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "../../api";
import Quiz from "../../components/Quiz";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { CountState } from "../../atoms";
import styled from "styled-components";
export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

function Question() {
  // const { isLoading, data } = useQuery<IData>(["allQuestions"], fetchQuestions);
  const [quizlist, setQuizList] = useState<null | IQuestion[]>(null);

  const count = useRecoilValue(CountState);
  console.log(quizlist);
  useEffect(() => {
    fetchQuestions().then((res) => setQuizList(res.data.results));
  }, []);
  return (
    <Wrapper>
      {quizlist?.map(
        (quiz, idx) => idx + 1 === count && <Quiz key={count} {...quiz} />
      )}
    </Wrapper>
  );
}

export default Question;
const Wrapper = styled.div`
  width: 700px;
  max-width: 700px;
`;
