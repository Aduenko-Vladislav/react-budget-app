import { ReactNode } from "react";
import { Currency } from "../../config/Currency";

export interface ICurrencyContext {
  currency: Currency;
  setCurrency: (newCurrency: Currency) => void;
}

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}
