import Router from "../../core/Spaf-router.js";
import Home from "../components/home.js";
import Programs from "../components/programs.js";
import Students from "../components/students.js";
import StudentProfile from "../components/studentProfile.js";
import NotFound404 from "../components/404.js";
import ServiceLocations from "../components/serviceLocations.js";

const routes = [
  { route: "/", component: Home, default: true },
  { route: "/programs", component: Programs },
  { route: "/students", component: Students },
  { route: "/students/:param", component: StudentProfile },
  { route: "/404", component: NotFound404 },
  { route: "/serviceLocations", component: ServiceLocations }
];

export default rootElement => Router(rootElement, routes);
