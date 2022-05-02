import { IExpenses } from "../../context/ExpenseContext/types";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledListItem } from "./styles";

interface IListItem {
  item: IExpenses;
}

export const ListItem = ({ item }: IListItem) => {
  return (
    <StyledListItem>
      {item.name}
      <Badge cost={item.cost}></Badge>
      <Close />
    </StyledListItem>
  );
};
