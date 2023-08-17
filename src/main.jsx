import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StylesApp } from "./ui/StylesApp.js";
import { AppRouter } from "./router/AppRouter.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { BuyingProvider } from "./context/BuyContext.jsx";
import { FiltersProvider } from "./context/FilteredContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FiltersProvider>
      <CartProvider>
        <BuyingProvider>
          <StylesApp />
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </BuyingProvider>
      </CartProvider>
    </FiltersProvider>
  </React.StrictMode>
);
