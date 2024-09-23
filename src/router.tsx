import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/user/:userId', element: <User /> }
])