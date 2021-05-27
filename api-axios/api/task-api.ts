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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TaskDTO } from '../model';
/**
 * TaskApi - axios parameter creator
 * @export
 */
export const TaskApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [eventId] 
         * @param {string} [fromDate] 
         * @param {string} [toDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskGetTasksGet: async (eventId?: number, fromDate?: string, toDate?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Task/GetTasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
            }

            if (fromDate !== undefined) {
                localVarQueryParameter['fromDate'] = (fromDate as any instanceof Date) ?
                    (fromDate as any).toISOString() :
                    fromDate;
            }

            if (toDate !== undefined) {
                localVarQueryParameter['toDate'] = (toDate as any instanceof Date) ?
                    (toDate as any).toISOString() :
                    toDate;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiTaskIdGet', 'id', id)
            const localVarPath = `/api/Task/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskApi - functional programming interface
 * @export
 */
export const TaskApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [eventId] 
         * @param {string} [fromDate] 
         * @param {string} [toDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTaskGetTasksGet(eventId?: number, fromDate?: string, toDate?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTaskGetTasksGet(eventId, fromDate, toDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTaskIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTaskIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskApi - factory interface
 * @export
 */
export const TaskApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [eventId] 
         * @param {string} [fromDate] 
         * @param {string} [toDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskGetTasksGet(eventId?: number, fromDate?: string, toDate?: string, options?: any): AxiosPromise<Array<TaskDTO>> {
            return localVarFp.apiTaskGetTasksGet(eventId, fromDate, toDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskIdGet(id: number, options?: any): AxiosPromise<TaskDTO> {
            return localVarFp.apiTaskIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskApi - object-oriented interface
 * @export
 * @class TaskApi
 * @extends {BaseAPI}
 */
export class TaskApi extends BaseAPI {
    /**
     * 
     * @param {number} [eventId] 
     * @param {string} [fromDate] 
     * @param {string} [toDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApi
     */
    public apiTaskGetTasksGet(eventId?: number, fromDate?: string, toDate?: string, options?: any) {
        return TaskApiFp(this.configuration).apiTaskGetTasksGet(eventId, fromDate, toDate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApi
     */
    public apiTaskIdGet(id: number, options?: any) {
        return TaskApiFp(this.configuration).apiTaskIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}
