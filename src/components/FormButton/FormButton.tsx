import { StyledFormButton } from "./styles";
interface IFormButton {
  children: string;
}

export const FormButton = ({ children }: IFormButton) => {
  return <StyledFormButton>{children}</StyledFormButton>;
};
