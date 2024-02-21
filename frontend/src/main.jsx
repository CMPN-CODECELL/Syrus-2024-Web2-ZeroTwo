import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Notfound from "./pages/NotFound.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Home from "./pages/Home.jsx";
import { dark } from "@clerk/themes";
import PlanForm from "./components/PlanForm/PlanForm.jsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-review",
    element: <App />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "planner",
    element: <PlanForm />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
          borderRadius: 2,
          colorBgContainer: "#fff",
        },
      }}
    ></ConfigProvider>
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={"pk_test_ZGVhci1za2luay05Ny5jbGVyay5hY2NvdW50cy5kZXYk"}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);