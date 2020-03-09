import { html } from "../../core/Spaf.js";

const _404Page = () => {
  console.log("404 page");
  return html`
    <h1 class="url-error">Page not found</h1>
  `;
};

export default _404Page;
