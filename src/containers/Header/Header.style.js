import styled from "styled-components";

const Header = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

const IconPlaceholder = styled.div`
  width: 30px;
  height: 30px;
`;

const Icon = styled(IconPlaceholder)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NoIcon = styled(IconPlaceholder)``;

const Logo = styled.div`
  width: 100px;
  height: 100%;
  /* background: red; */

  svg {
    width: 100%;
    height: 100%;
  }
`;

export { Header, Icon, Logo, NoIcon };
