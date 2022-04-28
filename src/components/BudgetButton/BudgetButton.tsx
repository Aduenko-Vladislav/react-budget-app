import { StyledBudgetButton } from "./styles";

interface IBudgetButton {
  children: string;
}

export const BudgetButton = ({ children }: IBudgetButton) => {
  // const [isEdit, setIsEdit] = useState(false);
  // const hadleEdit = () => {
  //   setIsEdit(true);
  // };
  return <StyledBudgetButton>{children}</StyledBudgetButton>;
};

export default BudgetButton;
