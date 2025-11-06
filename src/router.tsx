import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
// Renamed the Programs Hub component for clarity
import Programs from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

// New Program Detail Page Imports
import GlobalSummit from "./pages/GlobalSummit";
import YouthLeadership from "./pages/YouthLeadership";
import CulturalProgramsPage from "./pages/CulturalProgramsPage";
import ActionGrants from "./pages/ActionGrants";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "programs",
        element: <Programs />, // The Programs Hub page (formerly OurWork)
        children: [
          // 1. Global Women's Cultural Summit
          { path: "summit", element: <GlobalSummit /> },
          // 2. Youth Global Leadership Program
          { path: "mentorship", element: <YouthLeadership /> },
          // 3. Cultural Immersion Programs
          // NOTE: The Programs hub links to '/events', but the logical path for the detail page is here.
          { path: "cultural", element: <CulturalProgramsPage /> }, 
          // 4. Action Grants
          { path: "grants", element: <ActionGrants /> },
        ],
      },
      {
        path: "get-involved",
        element: <GetInvolved />,
        children: [
          { path: "volunteer", element: <ComingSoon /> },
          { path: "partnerships", element: <ComingSoon /> },
          { path: "events", element: <ComingSoon /> },
        ],
      },
      { path: "news", element: <News /> },
      { path: "contact", element: <Contact /> },
      { path: "donate", element: <Donate /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;