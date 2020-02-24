import Spaf, { render } from "../core/Spaf.js";
import Router from "./routes/router.js";

window.onload = () => {
  const { setRootElement, getRootElement } = new Spaf();
  render(
    Router(getRootElement),
    setRootElement(document.getElementById("app"))
  );
};
