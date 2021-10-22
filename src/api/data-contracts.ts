/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Commander {
  /** @format int32 */
  Id?: number;
  Name?: string | null;
  Rank?: Rank;
}

export interface Conflict {
  /** @format int32 */
  Id?: number;
  Name?: string | null;
  Place?: ConflictPlace;
  SubConflicts?: Conflict[] | null;
  Units?: UnitInConflict[] | null;
}

export interface ConflictPlace {
  /** @format int32 */
  Id?: number;
  Name?: string | null;

  /** @format double */
  Latitude?: number;

  /** @format double */
  Longitude?: number;

  /** @format date-time */
  Start?: string | null;

  /** @format date-time */
  End?: string | null;
}

/**
 * @format int32
 */
export type ConflictSide = 0 | 1;

/**
 * @format int32
 */
export type Rank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Strength {
  /** @format int32 */
  Id?: number;

  /** @format int32 */
  StartedWith?: number | null;

  /** @format int32 */
  Lost?: number | null;
}

export interface Unit {
  /** @format int32 */
  Id?: number;
  Name?: string | null;
  Scale?: UnitScale;
  Type?: UnitType;
}

export interface UnitInConflict {
  /** @format int32 */
  Id?: number;
  Unit?: Unit;
  Commander?: Commander;
  SubUnits?: UnitInConflict[] | null;
  Strength?: Strength;
  Side?: ConflictSide;
}

/**
 * @format int32
 */
export type UnitScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * @format int32
 */
export type UnitType = 0 | 1 | 2 | 3 | 4 | 5;
