import { ReactNode } from "react";
import styled from "styled-components";

interface IList {
  children: ReactNode;
}

export const List = ({ children }: IList) => {
  return <StyledList>{children}</StyledList>;
};

const StyledList = styled.ul``;
