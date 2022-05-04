import { ReactNode } from "react";

export interface IBudgetContext {
  budget: number;
  setBudget: (newBudget: number) => void;
}

export interface IBudgetContextProviderProps {
  children: ReactNode;
}
