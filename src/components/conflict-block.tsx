import { Conflict } from "api/data-contracts";
import { ConflictWithAction } from "models/conflict-with-action";

export type ConflictBlockProps = {
  conflict: ConflictWithAction;
  isSelected: boolean;
};

export function ConflictBlock({ conflict, isSelected }: ConflictBlockProps) {
  return (
    <div onClick={conflict.action} className={`conflict-block ${isSelected ? "conflict-block--selected" : ""}`}>
      <span className="conflict-block__name">{conflict.conflict.Name}</span>
    </div>
  );
}
