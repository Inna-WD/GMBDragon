import Router from "../../core/Spaf-router.js";
import Home from "../components/home.js"; // home component
import Programs from "../components/programs.js"; // programs component
import Students from "../components/students.js"; // students component
import StudentProfile from "../components/studentProfile.js"; // studentProfile component
import NotFound404 from "../components/404.js"; // 404 component

const routes = [
  { route: "/", component: Home, default: true },
  { route: "/programs", component: Programs },
  { route: "/students", component: Students },
  { route: "/students/:param", component: StudentProfile },
  { route: "/404", component: NotFound404 }
];

export default rootElement => Router(rootElement, routes);
