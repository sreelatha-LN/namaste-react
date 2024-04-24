import React, { lazy, Suspense, useEffect, useState } from "react";
import  {Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/Restaurantmenu";
import UserContext from "./utils/UserContext";
import appStore from './utils/appStore'
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: " sreelatha",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>test</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>test</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
