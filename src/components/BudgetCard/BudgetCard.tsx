import { ReactNode } from "react";
import { StyledBudgetCard } from "./styles";

interface IBudgetCard {
  children: ReactNode;
  type: string;
  isEdit?: boolean;
}

export const BudgetCard = ({ children, type }: IBudgetCard) => {
  return <StyledBudgetCard type={type}>{children} </StyledBudgetCard>;
};

export default BudgetCard;
