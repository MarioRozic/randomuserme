import styled from "styled-components";

const DetailsBox = styled.div`
  width: 300px;
  margin: 15px auto;
  background: #ffffff;
  border: 1px solid #a6adb4;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
`;
const Text = styled.span`
  font-size: 15px;
  margin: 5px 0;
`;

export { DetailsBox, Image, Title, Text };
