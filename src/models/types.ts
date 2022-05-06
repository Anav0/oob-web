import { ParsedCommandLine, SolutionBuilder, UnionOrIntersectionTypeNode } from "typescript";

export type Place = {
    id: number;
    name: string;
};

export interface ConflictSearchPayload {
    name: string;
    placeTypeName?: string;
    placeId?: any;
    parentId?: any;
    from?: Date;
    until?: Date;
    limit: number,
    page: number,
}

export type ConflictSide = {}
export type Soldier = {}

export type UnitSize = {
    Id: number,
    Size: number,
    Name: string
}

export type UnitType = {
    Id: number,
    Name: string
}

export type Material = {}

export type UnitBasicInfo = {
    Id: number,
    Desc: string,
    Name: string,
    From: Date,
    Until: Date,
    Commander: Soldier,
    SideId: number,
    Side: ConflictSide,
    Size: UnitSize,
    Type: UnitType,
    Insignia: Material
}

export type UnitsInConflict = {
    Conflict: Conflict,
    UnitInfo: UnitBasicInfo,
}

export type Conflict = {
    ConflictSides: ConflictSide[];
    Name: string,
    Desc: string,
    From: Date,
    Until?: Date,
    Parent?: Conflict,
    Children: Conflict[]
    UnitsInConflicts: UnitsInConflict[],
    ParentId?: number,
    Place?: Place,
    PlaceId?: number,
}

export function fixDates(results: Conflict[]) {
    results.map((x) => {
        x.From = new Date(x.From);
        if (x.Until) x.Until = new Date(x.Until);
        fixDates(x.Children);
    });
}