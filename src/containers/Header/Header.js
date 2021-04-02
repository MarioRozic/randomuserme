import React from "react";

import { ReactComponent as DeptLogo } from "../../logo.svg";
import { Header as HeaderBar, Icon, Logo, NoIcon } from "./Header.style";

import { MdArrowBack } from "react-icons/md";

export default function Header({ enableBack }) {
  return (
    <>
      <HeaderBar>
        {enableBack ? (
          <Icon>
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
