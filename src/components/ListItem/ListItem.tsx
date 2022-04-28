import React, { ReactNode } from "react";
import { StyledListItem } from "./style";

interface IListitem {
  children: ReactNode;
}

export const ListItem = ({ children }: IListitem) => {
  return <StyledListItem>{children}</StyledListItem>;
};
