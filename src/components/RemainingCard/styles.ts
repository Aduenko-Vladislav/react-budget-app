import styled from "styled-components";

interface IStyles {
  isOverBudget: boolean;
}

export const StyledRemainingCard = styled.div<IStyles>`
  padding: 38px 20px;

  border-radius: 10px;
  background: ${({ isOverBudget }) =>
    isOverBudget ? "rgb(255 0 0)" : "rgb(204 213 255)"};
`;

export const Title = styled.p<IStyles>`
  font-weight: ${({ isOverBudget }) => (isOverBudget ? "700" : "500")};
  font-size: 20px;
  line-height: 24px;

  color: ${({ isOverBudget }) =>
    isOverBudget ? "rgb(255 255 255)" : "rgb(0 0 0)"};
`;
