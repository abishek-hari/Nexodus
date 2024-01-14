import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  Landing,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthWrapper>
        <Home />
      </AuthWrapper>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout/*",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
