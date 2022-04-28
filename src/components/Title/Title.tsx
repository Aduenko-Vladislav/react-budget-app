import { StyledTitle } from "./styles";

interface ITitle {
  children: string;
}

export const Title = ({ children }: ITitle) => {
  return <StyledTitle>{children}</StyledTitle>;
};
