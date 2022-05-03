import styled from "styled-components";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { IExpenses } from "../../context/ExpenseContext/types";
import { ListItem } from "../ListItem/ListItem";

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

const StyledList = styled.ul`
  min-height: 260px;
  overflow: auto;
  list-style-type: none;
`;

const StyledBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 260px;
`;
