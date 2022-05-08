import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";
import { StyledRemainingCard, Title } from "./styles";

const RemainingCard = () => {
  const { currency } = useCurrencyContex();
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const remaining = budget - expenses.reduce((sum, { cost }) => sum + cost, 0);

  const isOverBudget = remaining < 0;

  return (
    <StyledRemainingCard isOverBudget={isOverBudget}>
      <Title isOverBudget={isOverBudget}>
        {isOverBudget
          ? `Overspending by ${currency}${Math.abs(remaining)}`
          : `Remaining: ${currency}${remaining}`}
      </Title>
    </StyledRemainingCard>
  );
};

export default RemainingCard;
