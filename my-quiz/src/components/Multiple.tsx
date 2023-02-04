import styled from "styled-components";

export default function Multiple() {
  return (
    <Div>
      <Box></Box>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 70px;
`;

const Box = styled.div`
  width: 300px;
  text-align: center;
  padding: 10px;
`;
