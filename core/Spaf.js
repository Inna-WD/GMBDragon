/**
 * Spaf  = Single Page Application Framework
 * DO NOT DIRECTLY ACCESS ALL CAPS PROPERTIES
 * TODO more documentation
 */

const init = () => {
  let PARENT_ELEMENT = null;
  const setParentElement = element => {
    PARENT_ELEMENT = element;
  };
  const getParentElement = () => PARENT_ELEMENT;
  return {
    setParentElement,
    getParentElement
  };
};

const flush = element => {
  element.childNodes.forEach(elm => {
    elm.remove();
  });
};

const SPAF = () => {
  return {
    ...init(),
    flush,
    render(component, position = "afterbegin") {
      const element = component();
      const parentElement = this.getParentElement();
      if (!(element instanceof Element))
        parentElement.insertAdjacentHTML(position, element);
      else parentElement.insertAdjacentElement(position, element);
    }
  };
};

export default SPAF;
