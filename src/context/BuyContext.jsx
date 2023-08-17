import { createContext, useState } from "react";

export const BuyingContext = createContext();

export const BuyingProvider = ({ children }) => {
  const [inBuy, setInBuy] = useState(false);

  const value = {
    inBuy,
    setInBuy,
  };
  return (
    <BuyingContext.Provider value={value}>{children}</BuyingContext.Provider>
  );
};
