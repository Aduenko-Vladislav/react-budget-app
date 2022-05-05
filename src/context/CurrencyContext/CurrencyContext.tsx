import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/Currency";
import { ICurrencyContext, ICurrencyContextProviderProps } from "./types";

const CurrencyContext = createContext<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: () => {},
  });
  
  const useCurrencyContextValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
      () => ({
        currency: Currency.USD,
        setCurrency: (newCurrency) => {
          setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency }));
        },
      })
    );
    return currencyContext;
  };
  
  export const useCurrencyContex = () =>
    useContext<ICurrencyContext>(CurrencyContext);
  
  export const CurrencyContextProvider = ({
    children,
  }: ICurrencyContextProviderProps) => {
    return (
      <CurrencyContext.Provider value={useCurrencyContextValue()}>
        {children}
      </CurrencyContext.Provider>
    );
  };

