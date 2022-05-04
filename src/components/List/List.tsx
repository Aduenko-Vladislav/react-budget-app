import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { IExpenses } from "../../context/ExpenseContext/types";
import { ListItem } from "../ListItem/ListItem";
import { StyledBlock, StyledList } from "./styles";

export const List = () => {
  const { expenses } = useExpensesContext();

  return (
    <StyledList>
      {expenses.length ? (
        expenses.map((item: IExpenses) => {
          return <ListItem key={item.name} item={item}></ListItem>;
        })
      ) : (
        <StyledBlock>Oooops 🙈</StyledBlock>
      )}
    </StyledList>
  );
};
