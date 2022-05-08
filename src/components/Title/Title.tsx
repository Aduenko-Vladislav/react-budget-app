import { StyledTitle } from "./styles";


interface ITitle {
  text: string;
}

export const Title = ({ text }: ITitle) => {
  return <StyledTitle>{text}</StyledTitle>;
};
