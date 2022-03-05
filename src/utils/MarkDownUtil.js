export const getContents = (markdown) =>
  markdown.split("\r\n").map((e) => {
    const line = e.trim().split("::");
    const sideBarElement = line[0];
    const sideBarPageFile = line[1];
    const obj = { menu: sideBarElement, file: sideBarPageFile };
    return obj;
  });

export const getHeaderItems = (markdown) => {
  console.log(markdown);
};
