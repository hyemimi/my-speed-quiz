import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { AnswerState } from "../atoms";

export default function Ox({
  correct_answer,
  setIsCorrect,
  setIsAnswered,
}: any) {
  const onClick = (e: any) => {
    if (e.currentTarget.value === correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsAnswered(true);
  };
  return (
    <Div>
      <Box value="True" onClick={onClick} color="green">
        True
      </Box>
      <Box value="False" onClick={onClick}>
        False
      </Box>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 70px;
`;
const Box = styled.div<{ value: string }>`
  text-align: center;
  align-items: center;
  width: 300px;
  height: 100px;
  background-color: ${(props) => (props.color ? props.color : "red")};
  cursor: pointer;
  font-size: 40px;
  padding: 20px;
  justify-content: center;
`;
