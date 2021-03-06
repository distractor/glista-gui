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



/**
 * 
 * @export
 * @interface EditUserDTO
 */
export interface EditUserDTO {
    /**
     * 
     * @type {number}
     * @memberof EditUserDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof EditUserDTO
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EditUserDTO
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EditUserDTO
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EditUserDTO
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof EditUserDTO
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EditUserDTO
     */
    userLevel?: EditUserDTOUserLevel;
}

/**
    * @export
    * @enum {string}
    */
export enum EditUserDTOUserLevel {
    SuperUser = 'SuperUser',
    RegularUser = 'RegularUser',
    ViewOnlyUser = 'ViewOnlyUser'
}



