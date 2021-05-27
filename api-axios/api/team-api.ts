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
import { AddNewTeamDTO } from '../model';
// @ts-ignore
import { EditTeamDTO } from '../model';
// @ts-ignore
import { TeamDTO } from '../model';
/**
 * TeamApi - axios parameter creator
 * @export
 */
export const TeamApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [containsInName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamGetTeamsGet: async (containsInName?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Team/GetTeams`;
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

            if (containsInName !== undefined) {
                localVarQueryParameter['containsInName'] = containsInName;
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
        apiTeamIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiTeamIdDelete', 'id', id)
            const localVarPath = `/api/Team/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiTeamIdGet', 'id', id)
            const localVarPath = `/api/Team/{id}`
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
        /**
         * 
         * @param {number} id 
         * @param {EditTeamDTO} [editTeamDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamIdPut: async (id: number, editTeamDTO?: EditTeamDTO, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiTeamIdPut', 'id', id)
            const localVarPath = `/api/Team/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(editTeamDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {AddNewTeamDTO} [addNewTeamDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamPost: async (addNewTeamDTO?: AddNewTeamDTO, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Team`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addNewTeamDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TeamApi - functional programming interface
 * @export
 */
export const TeamApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TeamApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [containsInName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTeamGetTeamsGet(containsInName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TeamDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTeamGetTeamsGet(containsInName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTeamIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTeamIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTeamIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTeamIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {EditTeamDTO} [editTeamDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTeamIdPut(id: number, editTeamDTO?: EditTeamDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTeamIdPut(id, editTeamDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {AddNewTeamDTO} [addNewTeamDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTeamPost(addNewTeamDTO?: AddNewTeamDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTeamPost(addNewTeamDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TeamApi - factory interface
 * @export
 */
export const TeamApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TeamApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [containsInName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamGetTeamsGet(containsInName?: string, options?: any): AxiosPromise<Array<TeamDTO>> {
            return localVarFp.apiTeamGetTeamsGet(containsInName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamIdDelete(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiTeamIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamIdGet(id: number, options?: any): AxiosPromise<TeamDTO> {
            return localVarFp.apiTeamIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {EditTeamDTO} [editTeamDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamIdPut(id: number, editTeamDTO?: EditTeamDTO, options?: any): AxiosPromise<void> {
            return localVarFp.apiTeamIdPut(id, editTeamDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AddNewTeamDTO} [addNewTeamDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamPost(addNewTeamDTO?: AddNewTeamDTO, options?: any): AxiosPromise<TeamDTO> {
            return localVarFp.apiTeamPost(addNewTeamDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TeamApi - object-oriented interface
 * @export
 * @class TeamApi
 * @extends {BaseAPI}
 */
export class TeamApi extends BaseAPI {
    /**
     * 
     * @param {string} [containsInName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    public apiTeamGetTeamsGet(containsInName?: string, options?: any) {
        return TeamApiFp(this.configuration).apiTeamGetTeamsGet(containsInName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    public apiTeamIdDelete(id: number, options?: any) {
        return TeamApiFp(this.configuration).apiTeamIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    public apiTeamIdGet(id: number, options?: any) {
        return TeamApiFp(this.configuration).apiTeamIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {EditTeamDTO} [editTeamDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    public apiTeamIdPut(id: number, editTeamDTO?: EditTeamDTO, options?: any) {
        return TeamApiFp(this.configuration).apiTeamIdPut(id, editTeamDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AddNewTeamDTO} [addNewTeamDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    public apiTeamPost(addNewTeamDTO?: AddNewTeamDTO, options?: any) {
        return TeamApiFp(this.configuration).apiTeamPost(addNewTeamDTO, options).then((request) => request(this.axios, this.basePath));
    }
}
