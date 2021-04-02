import styled from "styled-components";

const CardBox = styled.div`
  height: 100px;
  margin: 15px;
  background: #ffffff;
  display: flex;
  border: 1px solid #a6adb4;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  user-select: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.div`
  width: 100px;
  height: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`;

const CardText = styled.div`
  margin-left: 15px;
  width: 350px;
  padding: 25px 0;
`;

const CardContent = styled.span`
  display: inline-block;
  width: ${(props) => (props.isTitle ? "" : "200px")};
  margin-right: ${(props) => (props.isTitle ? "10px" : "")};
  font-size: 20px;
  font-weight: 600;
`;

export { CardBox, CardImage, Image, CardText, CardContent };
