import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { css } from "styled-components";

const MarkDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  max-width: 800px;
  overflow-y: scroll;
  white-space: nowrap;

  -webkit-overflow-scrolling: touch;
`;

function MarkDown({ file, collapsed }) {
  const [markdown, setMarkdown] = useState("");
  if (file) {
    const f = require("../../page/" + file);
    fetch(f)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }

  return (
    <MarkDownContainer collapsed={collapsed}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkDownContainer>
  );
}

export default MarkDown;
