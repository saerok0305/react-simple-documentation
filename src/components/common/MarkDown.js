import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 800px;
`;

function MarkDown({ file }) {
  const [markdown, setMarkdown] = useState("");
  if (file) {
    const f = require("../../page/" + file);
    fetch(f)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }

  return (
    <MarkDownContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkDownContainer>
  );
}

export default MarkDown;
