import styled, { css } from "styled-components";
import defaultStyle from "../../style";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import StyledLink from "./StyledLink";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.2s ease-out;
  ${(props) =>
    props.sideBar &&
    css`
      width: 200px; ///////////////////////////////////////
      height: 100%;
      border-right: 1px solid ${defaultStyle.color0};
      background: grey;
    `}

  ${(props) =>
    !props.sideBar &&
    css`
      width: 0px;
      /* display: none; */
    `}
`;
const ContentContainer = styled.div`
  display: flex;
  width: calc(100% - 200px);
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px; /////////////////////
  height: 40px;
  margin: 2px 0px;

  &:hover {
    cursor: pointer;
    background-color: ${defaultStyle.color0};
  }
`;

function ContentTemplate({ menuList, sideBar }) {
  return (
    <Container>
      <SideBarContainer sideBar={sideBar}>
        {sideBar &&
          menuList &&
          menuList.map((obj, index) => (
            <Menu key={index}>
              <StyledLink to={obj.to}>{obj.label}</StyledLink>
            </Menu>
          ))}
      </SideBarContainer>
      <ContentContainer>
        <Routes>
          {menuList &&
            menuList.map((obj, index) => {
              const Component = obj.element;
              return (
                <Route
                  key={index}
                  path={obj.to}
                  element={<Component />}
                />
              );
            })}
        </Routes>
      </ContentContainer>
    </Container>
  );
}

export default ContentTemplate;
