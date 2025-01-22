import React from "react";
import { Navigate } from "react-router-dom";

// Layouts
import FullLayout from "../layouts/FullLayout/FullLayout.js";
import AuthLayout from "../layouts/AuthLayout/AuthLayout.js";
import CheckoutLayout from "../layouts/CheckoutLayout/CheckoutLayout.js";

// Pages
import Dashboard1 from "../views/dashboards/Dashboard1.js";
import MyBilling from "../views/my-billing/MyBilling";
import BillDetails from "../views/my-billing/BillDetails";
import Settings from "../views/Settings/Settings.js";
import LoginSelector from "../views/auth/LoginSelector.js";
import ModernLogin from "../views/auth/ModernLogin.js";
import Signup from "../views/auth/Signup.js";
import InvotraAdmin from "../views/admin/InvotraAdmin";
import MyAccount from "../views/my-account/MyAccount";
import Usage from "../views/usage/Usage";
import Checkout from "../views/billing/Checkout";

const ThemeRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginSelector /> },
      { path: "modern-login", element: <ModernLogin /> },
      { path: "signup", element: <Signup /> },
      { path: "", element: <Navigate to="/login" /> },
    ],
  },
  {
    path: "/app",
    element: <FullLayout />,
    children: [
      { path: "", element: <Navigate to="/app/dashboards/dashboard1" /> },
      { path: "dashboards/dashboard1", element: <Dashboard1 /> },
      { path: "my-billing", element: <MyBilling /> },
      { path: "my-billing/:billId", element: <BillDetails /> },
      { path: "settings", element: <Settings /> },
      { path: "admin", element: <InvotraAdmin /> },
      { path: "usage", element: <Usage /> },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutLayout />,
    children: [
      { path: "", element: <Checkout /> },
    ],
  },
  {
    path: "/my-account",
    element: <FullLayout />,
    children: [
      { path: "", element: <Navigate to="/my-account/profile" /> },
      { path: "profile", element: <MyAccount /> },
    ],
  },
];

export default ThemeRoutes;
