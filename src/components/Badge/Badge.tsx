import React from "react";
import { StyledBadge } from "./style";

interface IBadge {
  children: string;
}

export const Badge = ({ children }: IBadge) => {
  return <StyledBadge>{children}</StyledBadge>;
};

export default Badge;
