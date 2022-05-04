import close from "../../assets/icons/close.svg";
import { StyledClose } from "./style";

interface IClose {
  onClick: () => void;
}

export const Close = ({ onClick }: IClose) => {
  return <StyledClose src={close} alt="Delete" onClick={onClick} />;
};
