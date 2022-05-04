import { ChangeEvent } from "react";
import { StyledBudgetInput } from "./styles";

interface IBudgetInput {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BudgetInput = ({ handleInput }: IBudgetInput) => {
  return (
    <StyledBudgetInput
      onChange={handleInput}
      placeholder="Enter budget ..."
      type="number"
    ></StyledBudgetInput>
  );
};
