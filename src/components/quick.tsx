import React from "react";
import ListEntry from "./list-entry";
import { PropositionModel } from "./proposition";

type QuickProps = {
  header: string;
  propositions: PropositionModel[];
  className: string;
};

export const Quick = ({ className, header, propositions }: QuickProps) => {
  let entries = propositions.map((x) => <ListEntry {...x} />);
  return (
    <div className={`propositon ${className}`}>
      <h1 className="proposition__header">{header}</h1>
      {entries}
    </div>
  );
};
