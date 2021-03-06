import { ReactNode } from "react";

export interface IExpenseContextProviderProps {
  children: ReactNode;
}

export interface IExpenseContext {
  expenses: IExpenses[];
  setExpense: (newExpenses: IExpenses[]) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpenses {
  id: string;
  name: string;
  cost: number;
}
