import React from "react";
import styled, { css } from "styled-components";
import defaultStyle from "../../style";
import StyledLink from "../common/StyledLink";
import mappings from "../../page/mappings.json";
import { AiOutlineMenu } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 100%;
  ${(props) =>
    props.collapsed &&
    css`
      width: 60px;
    `}

  transition: width 0.2s ease-out;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  height: 100%;

  cursor: pointer;

  &:hover {
    background: ${defaultStyle.color0};
  }

  border-radius: 12px;

  ${(props) =>
    !props.collapsed &&
    css`
      color: ${defaultStyle.color4};
    `}

  -webkit-tap-highlight-color: transparent;
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: center; ////////////////////////////////////////////
  align-items: center;
  margin: 4px;
  height: 40px; ///////////////

  cursor: pointer;

  &:hover {
    background: ${defaultStyle.color0};
  }

  border-radius: 12px;

  user-select: none;
`;

function Header({ collapsed, onClickMenu }) {
  console.log(mappings);
  return (
    <Container>
      <Left collapsed={collapsed}>
        <MenuItem collapsed={collapsed} onClick={onClickMenu}>
          <AiOutlineMenu />
        </MenuItem>
      </Left>
      <Right>
        {mappings.map((e, index) => (
          <HeaderItem key={index}>
            <StyledLink to={e.header.path}>{e.header.label}</StyledLink>
          </HeaderItem>
        ))}
      </Right>
    </Container>
  );
}

export default Header;
