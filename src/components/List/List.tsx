import { IExpenses } from "../../context/ExpenseContext/types";
import { ListItem } from "../ListItem/ListItem";
import { StyledBlock, StyledList } from "./styles";

interface IList {
  findedExpenses: IExpenses[];
}
export const List = ({ findedExpenses }: IList) => {
  return (
    <StyledList>
      {findedExpenses.length ? (
        findedExpenses.map((item: IExpenses) => {
          return <ListItem key={item.name} item={item}></ListItem>;
        })
      ) : (
        <StyledBlock>Oooops 🙈</StyledBlock>
      )}
    </StyledList>
  );
};
