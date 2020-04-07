import Router from "../../core/Spaf-router.js";
import Home from "../components/home.js";
import Programs from "../components/programs.js";
import Students from "../components/students.js";
import StudentProfile from "../components/studentProfile.js";
import NotFound404 from "../components/404.js";
import ServiceLocations from "../components/serviceLocations.js";
import ServiceListings from "../components/serviceListings.js";
import ServicePhotos from "../components/servicePhotos.js";
import ServiceCitations from "../components/serviceCitations.js";
import ServiceReviews from "../components/serviceReviews.js";
import ServiceContent from "../components/serviceContent.js";
import ServicePhotographer from "../components/servicePhotographer.js";
import ServiceSEO from "../components/serviceSEO.js";
import contactUs from "../components/contactUs.js";




const routes = [
  { route: "/", component: Home, default: true },
  { route: "/programs", component: Programs },
  { route: "/students", component: Students },
  { route: "/students/:param", component: StudentProfile },
  { route: "/404", component: NotFound404 },
  { route: "/serviceLocations", component: ServiceLocations },
  { route: "/serviceListings", component: ServiceListings },
  { route: "/servicePhotos", component: ServicePhotos },
  { route: "/serviceCitations", component: ServiceCitations },
  { route: "/serviceReviews", component: ServiceReviews },
  { route: "/serviceContent", component: ServiceContent },
  { route: "/servicePhotographer", component: ServicePhotographer },
  { route: "/serviceSEO", component: ServiceSEO },
  { route: "/contactUs", component: contactUs },

];

export default rootElement => Router(rootElement, routes);
