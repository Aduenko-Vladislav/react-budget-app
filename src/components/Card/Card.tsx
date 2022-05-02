import BudgetButton from "../BudgetButton/BudgetButton";
import BudgetCard from "../BudgetCard/BudgetCard";
import Form from "../Form/Form";
import { List } from "../List/List";
import SearchInput from "../SearchInput/SearchInput";
import { CustomSelect } from "../Select/Select";
import { StyledTitle } from "../Title/styles";
import { BudgetContainer, Container, Header, StyledCard } from "./styles";

const Card = () => {
  return (
    <StyledCard>
      <Container>
        <Header>
          <StyledTitle>Budget App</StyledTitle>
          <CustomSelect />
        </Header>
        <BudgetContainer>
          <BudgetCard type="budget">
            Budget: $3000 <BudgetButton>Edit</BudgetButton>
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
