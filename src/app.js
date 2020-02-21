import Spaf from "../core/Spaf.js";
import Router from "./routes/router.js";

const App = Spaf();

window.onload = () => {
  App.setParentElement(document.getElementById("app"));
  App.render(Router(App));
};
