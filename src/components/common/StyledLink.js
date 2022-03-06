import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import defaultStyle from "../../style";

const MyLink = styled(NavLink)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  /* min-width: 100px; /////////////////////////// */
  /* height: 100%; */
  padding: 10px 40px; ///////////////////////////// 클릭 넓게
  text-decoration: none;

  /* &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  } */

  /* font-weight: bolder; */
  /* margin: 0 2rem 0 2rem; */
  color: black;

  /* :visited {
    color: grey;
  } */

  /* &:focus, */
  /* &:visited, */
  /* &:link, */
  &:focus {
    text-decoration: none;
    color: ${defaultStyle.color4};
    /* font-weight: bolder; */
  }
  /* &:hover {
    color: grey;
    transition-duration: 0.3s;
  } */

  -webkit-tap-highlight-color: transparent;
`;

function StyledLink({ children, to }) {
  return <MyLink to={to}>{children}</MyLink>;
}

export default StyledLink;
