import { ChangeEvent, useState } from "react";
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
import { BudgetContainer, Container, Header, StyledCard } from "./styles";

const Card = () => {
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

  const { budget, setBudget } = useBudgetContext();

  return (
    <StyledCard>
      <Container>
        <Header>
          <StyledTitle>Budget App</StyledTitle>
          <CustomSelect />
        </Header>
        <BudgetContainer>
          <BudgetCard type="budget">
            {isEdit ? (
              <BudgetInput handleInput={handleInput} />
            ) : (
              `Budget :${budget}`
            )}
            {isEdit ? (
              <BudgetButtonSave handleSave={handleSave}> Save </BudgetButtonSave>
            ) : (
              <BudgetButtonEdit handleEdit={handleEdit}> Edit </BudgetButtonEdit>
            )}
          </BudgetCard>
          <BudgetCard type="remaining">Remaining: $123</BudgetCard>
          <BudgetCard type="pent:">Spent so far: $30</BudgetCard>
        </BudgetContainer>
        <StyledTitle>Expenses</StyledTitle>
        <SearchInput />
        <List />
        <StyledTitle>Add Expense</StyledTitle>
        <Form></Form>
      </Container>
    </StyledCard>
  );
};

export default Card;
