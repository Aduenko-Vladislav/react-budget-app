import styled from "styled-components";

const StyledBudgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 38px 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  border-radius: 10px;
  background-color: rgb(124, 198, 254);
`;

const BudgetButtonSave = styled.button`
  max-width: 85px;
  width: 100%;
  padding: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border-radius: 10px;
  border: none;

  cursor: pointer;
  &:hover {
    background-color: rgba(178, 255, 172);

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const BudgetButtonEdit = styled.button`
  max-width: 85px;
  width: 100%;
  padding: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border-radius: 10px;
  border: none;

  cursor: pointer;
  &:hover {
    background-color: rgba(255, 226, 127);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgb(0 0 0);
`;

const BudgetInput = styled.input`
  width: 100%;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: rgba(255, 255, 255, 0.6);
  background-color: rgb(124, 198, 254);
  outline: none;

  &::-webkit-inner-spin-button {
    display: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: rgba(255, 255, 255, 0.6);
  }
`;

export {
  StyledBudgetCard,
  BudgetButtonSave,
  BudgetButtonEdit,
  BudgetInput,
  Title,
};
