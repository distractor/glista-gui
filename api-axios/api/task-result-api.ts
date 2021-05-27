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
import { TaskResultDTO } from '../model';
/**
 * TaskResultApi - axios parameter creator
 * @export
 */
export const TaskResultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [taskId] 
         * @param {number} [pilotId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskResultGetTaskResultsGet: async (taskId?: number, pilotId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/TaskResult/GetTaskResults`;
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

            if (taskId !== undefined) {
                localVarQueryParameter['taskId'] = taskId;
            }

            if (pilotId !== undefined) {
                localVarQueryParameter['pilotId'] = pilotId;
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
        apiTaskResultIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiTaskResultIdGet', 'id', id)
            const localVarPath = `/api/TaskResult/{id}`
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
 * TaskResultApi - functional programming interface
 * @export
 */
export const TaskResultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskResultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [taskId] 
         * @param {number} [pilotId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTaskResultGetTaskResultsGet(taskId?: number, pilotId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskResultDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTaskResultGetTaskResultsGet(taskId, pilotId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTaskResultIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResultDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTaskResultIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskResultApi - factory interface
 * @export
 */
export const TaskResultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskResultApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [taskId] 
         * @param {number} [pilotId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskResultGetTaskResultsGet(taskId?: number, pilotId?: number, options?: any): AxiosPromise<Array<TaskResultDTO>> {
            return localVarFp.apiTaskResultGetTaskResultsGet(taskId, pilotId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTaskResultIdGet(id: number, options?: any): AxiosPromise<TaskResultDTO> {
            return localVarFp.apiTaskResultIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskResultApi - object-oriented interface
 * @export
 * @class TaskResultApi
 * @extends {BaseAPI}
 */
export class TaskResultApi extends BaseAPI {
    /**
     * 
     * @param {number} [taskId] 
     * @param {number} [pilotId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskResultApi
     */
    public apiTaskResultGetTaskResultsGet(taskId?: number, pilotId?: number, options?: any) {
        return TaskResultApiFp(this.configuration).apiTaskResultGetTaskResultsGet(taskId, pilotId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskResultApi
     */
    public apiTaskResultIdGet(id: number, options?: any) {
        return TaskResultApiFp(this.configuration).apiTaskResultIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}
