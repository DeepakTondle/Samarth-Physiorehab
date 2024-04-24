import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
]);

const appRoot = ReactDOM.createRoot(document.getElementById("root"));
appRoot.render(<RouterProvider router={routeConfig} />);
