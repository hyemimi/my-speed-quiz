import { useRecoilValue, useSetRecoilState } from "recoil";
import { CountState } from "../atoms";
import { Button } from "./Quiz";
import { Link } from "react-router-dom";
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
