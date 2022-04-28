import styled from "styled-components";

interface IBudgetCard {
  type: string;
}
export const StyledBudgetCard = styled.div<IBudgetCard>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 38px 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  border-radius: 10px;
  background-color: ${({ type }) => {
    switch (type) {
      case "budget":
        return "rgb(124, 198, 254)";
      case "remaining":
        return " rgba(204, 213, 255)";

      default:
        return "rgb(231, 187, 227)";
    }
  }};
`;
