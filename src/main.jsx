import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { ToastContainer } from "react-toastify";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain='dev-0wgfs6sywatc46dg.us.auth0.com'
    clientId='L6KpRDqaSB7uBXczgYdDZZF0kKyANpmy'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
            <ToastContainer position='top-center' />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
