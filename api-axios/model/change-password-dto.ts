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
 * @interface ChangePasswordDTO
 */
export interface ChangePasswordDTO {
    /**
     * 
     * @type {number}
     * @memberof ChangePasswordDTO
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordDTO
     */
    oldPassword: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordDTO
     */
    newPassword: string;
}


