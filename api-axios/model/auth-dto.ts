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
 * @interface AuthDTO
 */
export interface AuthDTO {
    /**
     * 
     * @type {number}
     * @memberof AuthDTO
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthDTO
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthDTO
     */
    userLevel?: AuthDTOUserLevel;
    /**
     * 
     * @type {string}
     * @memberof AuthDTO
     */
    token?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthDTO
     */
    expiresOn?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AuthDTOUserLevel {
    SuperUser = 'SuperUser',
    RegularUser = 'RegularUser',
    ViewOnlyUser = 'ViewOnlyUser'
}



