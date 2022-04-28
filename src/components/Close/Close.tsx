import styled from "styled-components";
import close from "../../assets/icons/close.svg";

export const Close = () => {
  return <StyledClose src={close} alt="Delete" />;
};

const StyledClose = styled.img`
  cursor: pointer;
`;
