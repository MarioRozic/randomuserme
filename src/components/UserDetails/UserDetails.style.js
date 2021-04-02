import styled from "styled-components";

const DetailsBox = styled.div`
  width: 300px;
  margin: 15px;
  background: #ffffff;
  border: 2px solid #f2f1f3;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const Title = styled.span`
  font-size: 20px;
  margin: 20px 0;
`;
const Text = styled.span`
  font-size: 15px;
  margin: 5px 0;
`;

export { DetailsBox, Image, Title, Text };
