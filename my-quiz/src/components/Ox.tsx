import styled from "styled-components";

export default function Ox() {
  return (
    <Div>
      <Box color="green">True</Box>
      <Box>False</Box>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 70px;
`;
const Box = styled.div`
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
