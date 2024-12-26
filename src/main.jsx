import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Incidents from "./pages/Incidents.jsx";
import Locations from "./pages/Locations.jsx";
import Activities from "./pages/Activities.jsx";
import Documents from "./pages/Documents.jsx";
import CypherAi from "./pages/CypherAi.jsx";
import Started from "./components/incidens/Started.jsx";
import IncidentHome from "./components/incidens/IncidentHome.jsx";
import DescribeIncident from "./components/incidens/DescribeIncident.jsx";
import TitleIncident from "./components/incidens/TitleIncident.jsx";
import FinishIncident from "./components/incidens/FinishIncident.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/incident",
        element: <Incidents />,
        children: [
          {
            index: true,
            element: <IncidentHome />,
          },
          {
            path: "/incident/started",
            element: <Started />,
          },
          {
            path: "/incident/describe",
            element: <DescribeIncident />,
          },
          {
            path: "/incident/title",
            element: <TitleIncident />,
          },
          {
            path: "/incident/finish",
            element: <FinishIncident />,
          },
        ],
      },
      {
        path: "/location",
        element: <Locations />,
      },
      {
        path: "/activite",
        element: <Activities />,
      },
      {
        path: "/document",
        element: <Documents />,
      },
      {
        path: "/cyper",
        element: <CypherAi />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
