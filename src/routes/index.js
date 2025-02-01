import Centres from "../pages/Centres";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Tournaments from "../pages/Tournaments";

const layoutRoutes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/centres", component: Centres },
  { path: "/events", component: Events },
  { path: "/tournaments", component: Tournaments },
];

export { layoutRoutes };
