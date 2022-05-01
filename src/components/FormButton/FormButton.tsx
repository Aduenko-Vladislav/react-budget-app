import styled from "styled-components";

interface IFormButton {
  children: string;
}

export const FormButton = ({ children }: IFormButton) => {
  return <StyledFormButton>{children}</StyledFormButton>;
};

const StyledFormButton = styled.button`
  padding: 15px 147px;

  font-size: 16px;
  line-height: 19px;

  color: rgba(255, 255, 255, 1);
  background: rgba(35, 201, 255, 1);
  border: none;
  border-radius: 10px;

  transition: box-shadow 0.4s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow:  17px 17px 27px 8px rgba(30, 187, 244, 0.2);
  }
  &:active {
    background: rgba(231, 187, 227, 1);

  }
`;
