/* tslint:disable */
/* eslint-disable */
/**
 * Glista API
 * Glista ASP.NET Core Web API.
 *
 * The version of the OpenAPI document: v1
 * Contact: mitjajancic@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BasicInfoDTO } from './basic-info-dto';

/**
 * 
 * @export
 * @interface TaskDTO
 */
export interface TaskDTO {
    /**
     * 
     * @type {number}
     * @memberof TaskDTO
     */
    id?: number;
    /**
     * 
     * @type {BasicInfoDTO}
     * @memberof TaskDTO
     */
    event?: BasicInfoDTO;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    goalType?: TaskDTOGoalType;
    /**
     * 
     * @type {number}
     * @memberof TaskDTO
     */
    speedSectionDistance?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskDTO
     */
    taskDistance?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum TaskDTOGoalType {
    Circle = 'CIRCLE',
    Line = 'LINE'
}



