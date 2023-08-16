import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./context/FilteredContex.jsx";
import { StylesApp } from "./ui/StylesApp.js";
import { AppRouter } from "./router/AppRouter.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FiltersProvider>
      <CartProvider>
        <StylesApp />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CartProvider>
    </FiltersProvider>
  </React.StrictMode>
);
