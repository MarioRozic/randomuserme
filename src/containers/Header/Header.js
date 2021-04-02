import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as DeptLogo } from "../../logo.svg";
import { Header as HeaderBar, Icon, Logo, NoIcon } from "./Header.style";

import { MdArrowBack } from "react-icons/md";

export default function Header({ enableBack }) {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <>
      <HeaderBar>
        {enableBack ? (
          <Icon onClick={handleClick}>
            <MdArrowBack size={25} />
          </Icon>
        ) : (
          <NoIcon></NoIcon>
        )}
        <Logo>
          <DeptLogo />
        </Logo>

        {/* for optiosn later on */}
        <Icon></Icon>
      </HeaderBar>
    </>
  );
}
