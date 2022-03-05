import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import styled, { css } from "styled-components";
import defaultStyle from "../../style";
import StyledLink from "../common/StyledLink";
// import mappings from "../../page/mappings.mdx";
import mappings from "../../page/mappings.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  /* width: 200px; /////////////////////////////////////// */
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  transition: all 0.2s ease-out;
  ${(props) =>
    !props.collapsed &&
    css`
      width: 240px; ///////////////////////////////////////
      height: 100%;
      border-right: 1px solid ${defaultStyle.color0};
      /* background: grey; */
    `}

  ${(props) =>
    props.collapsed &&
    css`
      width: 0px;
      /* display: none; */
    `}
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
`;

const SideBarItem = styled.div`
  display: flex;
  /* justify-content: center; //////////////////////////////////////////// */
  align-items: center;
  margin: 4px;
  height: 40px; ///////////////
  width: 100%;

  /* transition: opacity 0.2s ease 0s, transform 0.2s ease 0s; */

  cursor: pointer;

  &:hover {
    background: ${defaultStyle.color0};
  }

  border-radius: 12px;
`;

const SideBarSubItem = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  height: 40px; ///////////////
  width: 100%;

  cursor: pointer;

  &:hover {
    background: ${defaultStyle.color0};
  }

  border-radius: 12px;
  padding-left: 20px;
`;

const ExtendButton = styled.div`
  display: flex;
  justify-content: center; ////////////////////////////////////////////
  align-items: center;
  height: 40px; ///////////////
  width: 40px;

  transform: rotateX(0deg);
  ${(props) =>
    props.extend &&
    css`
      transform: rotateX(180deg);
      color: ${defaultStyle.color4};
    `}

  transition: transform 0.250s ease-in;
`;

function SideBar({ collapsed }) {
  const [state, setState] = useState({});
  const onExtend = (key) => {
    setState({ ...state, [key]: state[key] ? !state[key] : true });
  };
  return (
    <Container collapsed={collapsed}>
      {!collapsed &&
        mappings.map((headerItem, index1) =>
          headerItem.side_bar.map((sideBarItem, index2) => (
            <ItemContainer key={index1 + "-" + index2}>
              <SideBarItem>
                <StyledLink to={sideBarItem.path}>
                  {sideBarItem.label}
                </StyledLink>
                {sideBarItem.sub.length && sideBarItem.sub.length > 0 && (
                  <ExtendButton
                    extend={state[index1 + "-" + index2]}
                    onClick={() => onExtend(index1 + "-" + index2)}
                  >
                    <AiOutlineDown />
                  </ExtendButton>
                )}
              </SideBarItem>
              {sideBarItem.sub.length &&
                sideBarItem.sub.length > 0 &&
                state[index1 + "-" + index2] &&
                sideBarItem.sub.map((subItem, index3) => (
                  <SideBarSubItem key={index1 + "-" + index2 + "-" + index3}>
                    <StyledLink to={subItem.path}>{subItem.label}</StyledLink>
                  </SideBarSubItem>
                ))}
            </ItemContainer>
          ))
        )}
    </Container>
  );
}

export default SideBar;
