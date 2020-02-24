import { createElement } from "../../core/Spaf.js";

const Button = props => {
  console.log(props);
  // do some logic here
  return createElement("button", props, props.children);
};

export default Button;
