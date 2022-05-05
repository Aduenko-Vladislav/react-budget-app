import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styles";

interface IBadge {
  cost: number;
}

export const Badge = ({ cost }: IBadge) => {
  const { currency } = useCurrencyContex();
  return <StyledBadge>{`${currency}${cost}`}</StyledBadge>;
};
