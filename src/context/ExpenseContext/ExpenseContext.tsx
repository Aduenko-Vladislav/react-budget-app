import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useState } from "react";
import {
  IExpenseContext,
  IExpenseContextProviderProps,
  IExpenses,
} from "./types";

export const ExpenseContext = createContext<IExpenseContext>({
  expenses: [],
  setExpense: (newExpenses: IExpenses[]) => {},
});

const useExpensesContextValue = () => {
  const [expenseContext, setExpenseContext] = useState<IExpenseContext>(() => ({
    expenses: [
      { id: uuidv4(), name: "shopping", cost: 100 },
      { id: uuidv4(), name: "drinking", cost: 200 },
      { id: uuidv4(), name: "relax", cost: 500 },
      { id: uuidv4(), name: "study", cost: 400 },
    ],
    setExpense: (newExpenses: IExpenses[]) => {
      setExpenseContext((ctx) => ({ ...ctx, expenses: newExpenses }));
    },
  }));
  return expenseContext;
};
export const useExpensesContext = () =>
  useContext<IExpenseContext>(ExpenseContext);

export const ExpenseContextProvider = ({
  children,
}: IExpenseContextProviderProps) => {
  return (
    <ExpenseContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpenseContext.Provider>
  );
};
