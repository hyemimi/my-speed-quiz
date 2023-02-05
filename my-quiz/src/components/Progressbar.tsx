import { motion, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface IProgress {
  setIsAnswered: any;
  setIsCorrect: any;
  isAnswered: boolean | null;
}
function Progressbar({ setIsAnswered, setIsCorrect, isAnswered }: IProgress) {
  const progressTextRef = useRef(0);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (time < 5) {
      setTimeout(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      setTime(0);
      setIsAnswered(true);
      setIsCorrect(false);
    }
  }, [time]);
  console.log(time);

  return (
    <Wrapper>
      {!isAnswered && <Bar style={{ width: `${time * 200}px` }}></Bar>}
    </Wrapper>
  );
}

export default Progressbar;

const Wrapper = styled.div`
  background-color: rgb(233, 233, 233);
  border-radius: 0.5rem;
  width: 1000px;
`;

const Bar = styled.div`
  background-color: rgb(62, 122, 235);
  height: 10px;
  border-radius: 1rem;
`;

const Div = styled.div`
  /* Size */
  width: 30px;
  margin-left: 30px;

  /* Content alignment */
  display: flex;
  flex-direction: row;

  /* Styling */
  color: white;
  font-family: montserrat;
  font-weight: bold;
  font-size: 30px;
`;
