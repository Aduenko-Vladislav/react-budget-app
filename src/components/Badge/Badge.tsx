import { StyledBadge } from "./styles";

interface IBadge {
  cost: number;
}

export const Badge = ({cost}:IBadge) => {
  return <StyledBadge>{`${cost}`}</StyledBadge>;
};
