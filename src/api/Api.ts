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

import { Conflict, UnitInConflict } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Conflicts
   * @name V1ConflictsLevelDetail
   * @request GET:/api/v1/conflicts/level/{level}
   */
  v1ConflictsLevelDetail = (level: number, params: RequestParams = {}) =>
    this.request<Conflict[], any>({
      path: `/api/v1/conflicts/level/${level}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Conflicts
   * @name V1ConflictsDetail
   * @request GET:/api/v1/conflicts/{id}
   */
  v1ConflictsDetail = (id: number, params: RequestParams = {}) =>
    this.request<Conflict, any>({
      path: `/api/v1/conflicts/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Conflicts
   * @name V1ConflictsUnitsDeepDetail
   * @request GET:/api/v1/conflicts/{id}/units/deep/{maxLevel}
   */
  v1ConflictsUnitsDeepDetail = (id: number, maxLevel: number, params: RequestParams = {}) =>
    this.request<UnitInConflict[], any>({
      path: `/api/v1/conflicts/${id}/units/deep/${maxLevel}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
