import { Button } from "@mui/material";
import { UnitsInConflict } from "models/types";
import React from "react";

export type UnitSmallProps = {
  unit: UnitsInConflict;
};
export const UnitSmall = ({ unit }: UnitSmallProps) => {
  return (
    <li>
      <Button>{unit.UnitInfo.Name}</Button>
    </li>
  );
};
