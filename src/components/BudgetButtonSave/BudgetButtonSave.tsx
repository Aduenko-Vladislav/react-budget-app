import { StyledBudgetButtonSave } from "./styles";

interface IBudgetButtonSave {
  children: string;
  handleSave: () => void;
}

export const BudgetButtonSave = ({
  children,
  handleSave,
}: IBudgetButtonSave) => {
  return (
    <StyledBudgetButtonSave onClick={handleSave}>
      {children}
    </StyledBudgetButtonSave>
  );
};
