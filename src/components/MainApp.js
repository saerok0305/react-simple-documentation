import React, { useState } from "react";
import styled from "styled-components";
import defaultStyle from "../style";
import Content from "./content/Content";
import Header from "./content/Header";
import SideBar from "./content/SideBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 8px;
  border-bottom: 1px solid ${defaultStyle.color0};
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100% - 50px);
`;

function MainApp({ collapsedDefault }) {
  const [collapsed, setCollapsed] = useState(collapsedDefault);
  const onClickMenu = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Container>
      <HeaderContainer>
        <Header collapsed={collapsed} onClickMenu={onClickMenu} />
      </HeaderContainer>
      <ContentContainer>
        <SideBar collapsed={collapsed} />
        <Content />
      </ContentContainer>
    </Container>
  );
}

export default MainApp;
