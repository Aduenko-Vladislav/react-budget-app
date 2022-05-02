import styled from "styled-components";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { ListItem } from "../ListItem/ListItem";

export const List = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledList>
      {expenses.map((item) => {
        return <ListItem key={item.name} item={item}></ListItem>;
      })}
    </StyledList>
  );
};

const StyledList = styled.ul`
  min-height: 200px;
  overflow: auto;
  list-style-type: none;
`;
