/**
 * Spaf  = Single Page Application Framework
 * DO NOT DIRECTLY ACCESS ALL CAPS PROPERTIES
 * TODO more documentation
 */

export default class SPAF {
  PARENT_ELEMENT = null;
  constructor() {}

  set parentElement(element) {
    this.PARENT_ELEMENT = element;
  }

  get parentElement() {
    return this.PARENT_ELEMENT;
  }

  flush() {
    this.parentElement.childNodes.forEach(elm => {
      elm.remove();
    });
  }

  render(component, position = "afterbegin") {
    const element = component();
    if (typeof element == "string")
      this.parentElement.insertAdjacentHTML(position, element);
    else this.parentElement.insertAdjacentElement(position, element);
  }
}
