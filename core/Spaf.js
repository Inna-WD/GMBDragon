/**
 * Spaf  = Single Page Application Framework
 * DO NOT DIRECTLY ACCESS ALL CAPS PROPERTIES
 * TODO more documentation
 */

export default () => {
  let PARENT_ELEMENT = null;
  const setParentElement = element => {
    PARENT_ELEMENT = element;
  };
  const getParentElement = () => PARENT_ELEMENT;

  const flush = () => {
    const parentElement = getParentElement();
    parentElement.childNodes.forEach(elm => {
      elm.remove();
    });
  };

  const render = (component, position = "afterbegin") => {
    const element = component();
    const parentElement = getParentElement();
    if (typeof element == "string")
      parentElement.insertAdjacentHTML(position, element);
    else parentElement.insertAdjacentElement(position, element);
  };

  return {
    setParentElement,
    getParentElement,
    flush,
    render
  };
};
