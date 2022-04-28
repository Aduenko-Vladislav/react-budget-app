import { ReactNode } from "react";
import { StyledBudgetCard } from "./styles";

interface IBudgetCard {
  children: ReactNode;
  type: string;
}

export const BudgetCard = ({ children, type }: IBudgetCard) => {
  return <StyledBudgetCard type={type}>{children}</StyledBudgetCard>;
};

export default BudgetCard;
