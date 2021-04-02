import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as DeptLogo } from "../../logo.svg";
import { Header as HeaderBar, Icon, Logo, NoIcon } from "./Header.style";

import { MdArrowBack } from "react-icons/md";
import { useIsFetching } from "react-query";
import Spinner from "../Spinner";

export default function Header({ enableBack }) {
  const history = useHistory();
  const isFetching = useIsFetching();

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
        <Icon>{isFetching ? <Spinner size={30} type /> : null}</Icon>
      </HeaderBar>
    </>
  );
}
