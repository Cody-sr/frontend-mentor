import { lazy } from "react";

const Countrie = lazy(() => import("./Countrie"));
const ErrorPage = lazy(() => import("./ErrorPage"));
const Home = lazy(() => import("./Home"));
const Root = lazy(() => import("./Root"));

export { Home, Root, Countrie, ErrorPage };
