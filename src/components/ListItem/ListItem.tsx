import { IExpenses } from "../../context/ExpenseContext/types";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledListItem } from "./styles";

interface IListItem {
  item: IExpenses;
}

export const ListItem = ({ item }: IListItem) => {
  const { deleteExpense } = useExpensesContext();

  const handleDelete = () => {
    deleteExpense(item.id);
  };
  return (
    <StyledListItem>
      {item.name}
      <Badge cost={item.cost}></Badge>
      <Close onClick={handleDelete} />
    </StyledListItem>
  );
};
