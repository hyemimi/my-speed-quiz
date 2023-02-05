import { useRecoilValue, useSetRecoilState } from "recoil";
import { CountState } from "../atoms";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function NextButton() {
  const count = useRecoilValue(CountState);
  const setCount = useSetRecoilState(CountState);
  const onClick = () => {
    setCount((oldcount) => oldcount + 1);
  };
  return (
    <>
      {count !== 10 ? (
        <Button onClick={onClick}>Next Question!</Button>
      ) : (
        <Link to="/result">
          <Button>Result</Button>
        </Link>
      )}
    </>
  );
}

export const Button = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.Primary_1};
  width: 350px;
  height: 60px;
  margin-top: 10px;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
