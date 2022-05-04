import { ChangeEvent, useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { BudgetButtonEdit } from "../BudgetButtonEdit/BudgetButtonEdit";
import { BudgetButtonSave } from "../BudgetButtonSave/BudgetButtonSave";
import BudgetCard from "../BudgetCard/BudgetCard";
import { BudgetInput } from "../BudgetInput/BudgetInpute";
import Form from "../Form/Form";
import { List } from "../List/List";
import SearchInput from "../SearchInput/SearchInput";
import { CustomSelect } from "../Select/Select";
import { StyledTitle } from "../Title/styles";
import { useExpensesContext } from "../../context/ExpenseContext/ExpenseContext";

import { BudgetContainer, Container, Header, StyledCard } from "./styles";
import { IExpenses } from "../../context/ExpenseContext/types";

const Card = () => {
  //Budget
  const { expenses } = useExpensesContext();
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

  const [spent, setSpent] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const [overspent, setOverspent] = useState<number>(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((sum, item) => sum + item.cost, 0);
    setSpent(totalSpent);
    setRemaining(budget - totalSpent);
    if (totalSpent > budget) {
      setOverspent(totalSpent - budget);
    }
  }, [budget, expenses]);

  const [type, setType] = useState<string>("remaining");
  useEffect(() => {
    if (budget > spent) {
      setType("remaining");
    } else {
      setType("overspending");
    }
  }, [spent, budget]);

  // Search
  const [searchValue, setSearchValue] = useState<string>("");
  const [findedExpenses, setFindedExpenses] = useState<IExpenses[]>([]);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const findExpenses = expenses;
    setFindedExpenses(
      findExpenses.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, expenses]);

  return (
    <StyledCard>
      <Container>
        <Header>
          <StyledTitle>Budget App</StyledTitle>
          <CustomSelect />
        </Header>
        <BudgetContainer>
          <BudgetCard isEdit type="budget">
            {isEdit ? (
              <BudgetInput handleInput={handleInput} />
            ) : (
              `Budget : ${budget}`
            )}
            {isEdit ? (
              <BudgetButtonSave handleSave={handleSave}>Save</BudgetButtonSave>
            ) : (
              <BudgetButtonEdit handleEdit={handleEdit}>Edit</BudgetButtonEdit>
            )}
          </BudgetCard>
          <BudgetCard type={type}>
            {type === "remaining"
              ? `Remaining: ${remaining}`
              : `Overspending by ${overspent}`}
          </BudgetCard>
          <BudgetCard type="spent:">Spent so far: {spent} </BudgetCard>
        </BudgetContainer>
        <StyledTitle>Expenses</StyledTitle>
        <SearchInput
          searchValue={searchValue}
          handleSearchInput={handleSearchInput}
        />
        <List findedExpenses={findedExpenses} />
        <StyledTitle>Add Expense</StyledTitle>
        <Form></Form>
      </Container>
    </StyledCard>
  );
};

export default Card;