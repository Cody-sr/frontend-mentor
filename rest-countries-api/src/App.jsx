import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Root, Countrie, ErrorPage } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countrie/:countrieId",
        element: <Countrie />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
