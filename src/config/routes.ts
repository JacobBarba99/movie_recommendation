import About from "../Pages/About";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import Movie from "../Pages/Movie";
import Recommendation from "../Pages/Recommendation";
import Search from "../Pages/Search";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/movie/:id",
    component: Movie,
    exact: true,
  },
  {
    path: "/search",
    component: Search,
    exact: true,
  },
  {
    path: "/recommendation",
    component: Recommendation,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    component: Error404,
  },
];

export default routes;
