import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import defaultStyle from "../../style";
import StyledLink from "../common/StyledLink";
import mappings from "../../page/mappings.json";
import { AiOutlineMenu } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  height: 100%;

  /* transition: opacity 0.2s ease 0s, transform 0.2s ease 0s; */

  cursor: pointer;

  &:hover {
    background: ${defaultStyle.color0};
  }

  border-radius: 12px;
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
`;

function Header({ onClickMenu }) {
  console.log(mappings);
  return (
    <Container>
      <Left>
        <MenuItem onClick={onClickMenu}>
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
