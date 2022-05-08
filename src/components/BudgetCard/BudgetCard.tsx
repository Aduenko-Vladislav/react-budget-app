import { ChangeEvent, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContex } from "../../context/CurrencyContext/CurrencyContext";

import {
  BudgetButtonEdit,
  BudgetButtonSave,
  BudgetInput,
  StyledBudgetCard,
  Title,
} from "./styles";

export const BudgetCard = () => {
  const { currency } = useCurrencyContex();
  const { budget, setBudget } = useBudgetContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  const handleSave = () => {
    setIsEdit(!isEdit);
    setBudget(inputValue);
  };
  return (
    <StyledBudgetCard>
      {isEdit ? (
        <>
          <BudgetInput
            type="number"
            onChange={handleInput}
            placeholder="Enter budget ..."
          />
          <BudgetButtonSave onClick={handleSave}>Save</BudgetButtonSave>
        </>
      ) : (
        <>
          <Title>
            Budget: {currency}
            {budget}
          </Title>
          <BudgetButtonEdit onClick={handleEdit}>Edit</BudgetButtonEdit>
        </>
      )}
    </StyledBudgetCard>
  );
};

export default BudgetCard;
