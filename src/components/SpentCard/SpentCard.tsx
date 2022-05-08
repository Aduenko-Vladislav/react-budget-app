import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { StyledSpentCard, Title } from "./styles";

const SpentCard = () => {
  const { currency } = useCurrencyContex();
  const { expenses } = useExpensesContext();

  const spent = expenses.reduce((sum, { cost }) => sum + cost, 0);
  return (
    <StyledSpentCard>
      <Title>
        Spent so far: {currency}
        {spent}
      </Title>
    </StyledSpentCard>
  );
};

export default SpentCard;
