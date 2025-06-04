import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Button from "./components/Button";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import WhyChooseUs from "./pages/WhyChooseUs";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import ShippingPolicy from "./pages/ShippingPolicy";
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
          path: "/why-us",
          element: <WhyChooseUs />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
