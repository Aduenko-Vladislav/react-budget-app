import { StyledBudgetButtonEdit } from "./styles";

interface IBudgetButtonEdit {
  children: string;
  handleEdit: () => void;
}

export const BudgetButtonEdit = ({
  children,
  handleEdit,
}: IBudgetButtonEdit) => {
  return (
    <StyledBudgetButtonEdit onClick={handleEdit}>
      {children}
    </StyledBudgetButtonEdit>
  );
};
