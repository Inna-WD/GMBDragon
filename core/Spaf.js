/**

 */

/**
 * function creates new instance of spa and sets root element as parent
 */
let ROOT_ELEMENT = null;

export default function() {
  return {
    setRootElement: element => (ROOT_ELEMENT = element),
    getRootElement: () => ROOT_ELEMENT
  };
}

/**
 * function removes all child nodes/elements
 * @param {Element} element
 */
export const flush = element => {
  element.childNodes.forEach(elm => {
    elm.remove();
  });
};

/**
 * Function creates new element
 * @param {String} type
 * @param {Object} attribs
 * @param {Element} children
 */
export const createElement = (type, attribs, children) => {
  const $dom = document.createElement(type);
  Object.entries({ ...attribs }).forEach(([key, value]) => {
    if (key != "children") $dom.setAttribute(key, value);
  });
  if (children) $dom.innerHTML += children;
  return $dom;
};

/**
 * function converts string to html element
 * @param {String} markup
 */
export const html = (markup, ...components) => {
  const $dom = document.createRange().createContextualFragment(markup)
    .firstElementChild;
  components.forEach(comp => {
    $dom.append(comp);
  });
  return $dom;
};

/**
 * function appends element to parent element according to positon
 * @param {Element } element
 * @param {Element} parentElement
 * @param {String?} position
 */
export const render = (element, parentElement, position = "beforeend") => {
  if (!(element instanceof Element)) return;
  parentElement.insertAdjacentElement(position, element);
  return parentElement;
};
