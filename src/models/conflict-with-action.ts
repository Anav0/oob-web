import { Conflict } from "api/data-contracts";

export class ConflictWithAction {
    conflict: Conflict;
    action: () => void;

    constructor(conflict: Conflict, action: () => void) {
        this.action = action;
        this.conflict = conflict;
    }
}