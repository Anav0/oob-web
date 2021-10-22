import { Conflict } from "api/data-contracts";
import { ConflictBlock } from "./conflict-block";
import React from "react";
import { ConflictWithAction } from "models/conflict-with-action";

type ConflictsListProps = {
  title: string;
  conflicts: ConflictWithAction[] | null;
  selectedIndex: number | null;
};

export function ConflictsList({ title, conflicts, selectedIndex }: ConflictsListProps) {
  const items = conflicts
    ? conflicts.map((conflict, i) => (
        <ConflictBlock
          key={`${i}-${conflict.conflict.Id}`}
          isSelected={selectedIndex != null && i === selectedIndex}
          conflict={conflict}
        />
      ))
    : [];
  return (
    <div className="conflicts-list">
      <h1 className="conflicts-list__title">{title}</h1>
      {items.length === 0 && <span>No items</span>}
      {items.length > 0 && <ul className="conflicts-list__items">{items}</ul>}
    </div>
  );
}
