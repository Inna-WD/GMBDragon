import Spaf from "../core/Spaf.js";
import Router from "./routes/router.js";

const App = new Spaf();

window.onload = () => {
  console.log("here");
  App.parentElement = document.getElementById("app");
  App.render(Router(App));
};
