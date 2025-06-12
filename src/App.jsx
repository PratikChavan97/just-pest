import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Button from "./components/Button";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OtherServicesPest from "./pages/OtherServicesPest";
import RodentControl from "./components/RodentControl";

import VectorControl from "./components/VectorControl";

// import About from "./pages/About";
// import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/terms",
          element: <TermsConditions />,
        },
        {
          path: "/privacy-policy",
          element: <Privacy />,
        },
        {
          path: "/shipping",
          element: <ShippingPolicy />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/pest-control",
          element: "Pest Control",
        },
        {
          path: "/services/vector-control",
          element: <VectorControl />,
        },
        {
          path: "/services/rodent-control",
          element: <RodentControl />,
        },

        {
          path: "/services/other-services",
          element: <OtherServicesPest />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
