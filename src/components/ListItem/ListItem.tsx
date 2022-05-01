import React, { ReactNode } from "react";
import { StyledListItem } from "./styles";

interface IListitem {
  children: ReactNode;
}

export const ListItem = ({ children }: IListitem) => {
  return <StyledListItem>{children}</StyledListItem>;
};
