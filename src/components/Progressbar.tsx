import { useEffect, useState } from "react";
import styled from "styled-components";
interface IProgress {
  setIsAnswered: any;
  setIsCorrect: any;
  isAnswered: boolean | null;
}
function Progressbar({ setIsAnswered, setIsCorrect, isAnswered }: IProgress) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (time < 5) {
      let timer = setTimeout(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setTime(0);
      setIsAnswered(true);
      setIsCorrect(false);
    }
  }, [time]);

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
