import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import defaultStyle from "../../style";

const MyLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
  text-decoration: none;
  color: black;
  &:focus {
    text-decoration: none;
    color: ${defaultStyle.color4};
  }

  -webkit-tap-highlight-color: transparent;
`;

function StyledLink({ children, to }) {
  return <MyLink to={to}>{children}</MyLink>;
}

export default StyledLink;
