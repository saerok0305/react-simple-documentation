import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import NotFound from "../NotFound";
import mappings from "../../page/mappings.json";
import MarkDown from "./../common/MarkDown";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 240px);
`;

function Content() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/react-simple-documentation" element={<Home />} />
        {mappings.map((headerItem, index) => (
          <Route
            key={index}
            path={headerItem.header.path + "/*"}
            element={<MarkDown file={headerItem.header.mdx} />}
          />
        ))}
        {mappings.map((headerItem, index1) =>
          headerItem.side_bar.map((sideBarItem, index2) => (
            <Route
              key={index1 + "-" + index2}
              path={sideBarItem.path + "/*"}
              element={<MarkDown file={sideBarItem.mdx} />}
            />
          ))
        )}
        {mappings.map((headerItem, index1) =>
          headerItem.side_bar.map(
            (sideBarItem, index2) =>
              sideBarItem.sub &&
              sideBarItem.sub.length > 0 &&
              sideBarItem.sub.map((subItem, index3) => (
                <Route
                  key={index1 + "-" + index2 + "-" + index3}
                  path={subItem.path + "/*"}
                  element={<MarkDown file={subItem.mdx} />}
                />
              ))
          )
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default Content;
