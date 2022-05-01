import Badge from "../Badge/Badge";
import BudgetButton from "../BudgetButton/BudgetButton";
import BudgetCard from "../BudgetCard/BudgetCard";
import { Close } from "../Close/Close";
import Form from "../Form/Form";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
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
        <List>
          <ListItem>
            shoping <Badge>$100</Badge>
            <Close />
          </ListItem>
          <ListItem>
            drinking <Badge>$400</Badge>
            <Close />
          </ListItem>
          <ListItem>
            relax <Badge>$500</Badge>
            <Close />
          </ListItem>
          <ListItem>
            filming <Badge>$1000</Badge>
            <Close />
          </ListItem>
        </List>
        <StyledTitle>Add Expense</StyledTitle>
        <Form></Form>
      </Container>
    </StyledCard>
  );
};

export default Card;
