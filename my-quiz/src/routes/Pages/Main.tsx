import styled from "styled-components";

function Main() {
  return (
    <Container>
      <h1>프로그라피 8기 과제 퀴즈</h1>
      <Button>시작하기!</Button>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  width: 100%;
`;

const Button = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.Primary_1};
  width: 350px;
  height: 60px;
  margin: 100px;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
`;
export default Main;
