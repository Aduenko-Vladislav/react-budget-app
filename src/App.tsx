import styled from "styled-components";
import BudgetCard from "./components/BudgetCard/BudgetCard";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import Form from "./components/Form/Form";
import { List } from "./components/List/List";
import RemainingCard from "./components/RemainingCard/RemainingCard";
import SpentCard from "./components/SpentCard/SpentCard";
import { Title } from "./components/Title/Title";

const App = () => {
  return (
    <StyledApp>
      <Container>
        <Header>
          <Title text="Budget App"></Title>
          <CustomSelect />
        </Header>
        <BudgetContainer>
          <BudgetCard />
          <RemainingCard />
          <SpentCard />
        </BudgetContainer>
        <Title text="Expenses"></Title>
        <List />
        <Title text="Add Expense"></Title>
        <Form />
      </Container>
    </StyledApp>
  );
};
const StyledApp = styled.div`
  margin-top: 30px;
`;

export const Container = styled.div`
  display: grid;
  grid-row-gap: 30px;

  max-width: 500px;
  width: 100%;

  padding: 0 20px;
  margin: 0 auto 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BudgetContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
`;

export default App;
