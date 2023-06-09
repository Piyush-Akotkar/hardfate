import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import About from "./pages/About";
import Challenge from "./pages/Challenge";
import Contest from "./pages/Contest";
import Giveaway from "./pages/Giveaway";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import CustomError from "./pages/CustomError";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/game/challenge/:uuid",
        element: <Challenge />,
      },
      {
        path: "/contest",
        element: <Contest />,
      },
      {
        path: "/giveaway",
        element: <Giveaway />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/error",
    element: <CustomError />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
