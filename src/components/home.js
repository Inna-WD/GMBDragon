import { html } from "../../core/Spaf.js";
import Button from "./test-sub-component.js";

const HomePage = () => {
  //logic here
  return html`
    <h1>This is the home page!</h1>
    ${Button({ style: "padding: 1em; color: red", children: "test" })}
  `;
};

export default HomePage;
