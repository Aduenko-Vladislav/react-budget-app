import { StyledBudgetButton } from "./styles";

interface IBudgetButton {
  children: string;
}

export const BudgetButton = ({ children }: IBudgetButton) => {
  return <StyledBudgetButton>{children}</StyledBudgetButton>;
};

export default BudgetButton;
