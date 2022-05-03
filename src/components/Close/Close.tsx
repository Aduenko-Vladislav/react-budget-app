import styled from "styled-components";
import close from "../../assets/icons/close.svg";

interface IClose {
  onClick: () => void;
}

export const Close = ({onClick}: IClose) => {
  return <StyledClose src={close} alt="Delete" onClick={onClick} />;
};

const StyledClose = styled.img`
  cursor: pointer;
`;
