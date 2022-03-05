import { useEffect, useState } from "react";
function useFile(f) {
  const [file, setFile] = useState(null);

  const fetchFile = fetch(f)
    .then((res) => res.text())
    .then((text) => setFile(text));

  useEffect(() => {
    fetchFile();
  }, []);

  return [file];
}

export default useFile;
