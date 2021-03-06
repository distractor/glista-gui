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
import { AddNewUserDTO } from '../model';
// @ts-ignore
import { ChangePasswordDTO } from '../model';
// @ts-ignore
import { EditUserDTO } from '../model';
// @ts-ignore
import { UserDTO } from '../model';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ChangePasswordDTO} [changePasswordDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserChangePasswordPut: async (changePasswordDTO?: ChangePasswordDTO, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User/ChangePassword`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(changePasswordDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {boolean} [enabled] 
         * @param {'SuperUser' | 'RegularUser' | 'ViewOnlyUser'} [userLevel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserGetUsersGet: async (enabled?: boolean, userLevel?: 'SuperUser' | 'RegularUser' | 'ViewOnlyUser', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User/GetUsers`;
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

            if (enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }

            if (userLevel !== undefined) {
                localVarQueryParameter['userLevel'] = userLevel;
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
        apiUserIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiUserIdDelete', 'id', id)
            const localVarPath = `/api/User/{id}`
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
        apiUserIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiUserIdGet', 'id', id)
            const localVarPath = `/api/User/{id}`
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
         * @param {EditUserDTO} [editUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserIdPut: async (id: number, editUserDTO?: EditUserDTO, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiUserIdPut', 'id', id)
            const localVarPath = `/api/User/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(editUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {AddNewUserDTO} [addNewUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost: async (addNewUserDTO?: AddNewUserDTO, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(addNewUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ChangePasswordDTO} [changePasswordDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserChangePasswordPut(changePasswordDTO?: ChangePasswordDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserChangePasswordPut(changePasswordDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {boolean} [enabled] 
         * @param {'SuperUser' | 'RegularUser' | 'ViewOnlyUser'} [userLevel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserGetUsersGet(enabled?: boolean, userLevel?: 'SuperUser' | 'RegularUser' | 'ViewOnlyUser', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserGetUsersGet(enabled, userLevel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {EditUserDTO} [editUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserIdPut(id: number, editUserDTO?: EditUserDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserIdPut(id, editUserDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {AddNewUserDTO} [addNewUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPost(addNewUserDTO?: AddNewUserDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserPost(addNewUserDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @param {ChangePasswordDTO} [changePasswordDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserChangePasswordPut(changePasswordDTO?: ChangePasswordDTO, options?: any): AxiosPromise<void> {
            return localVarFp.apiUserChangePasswordPut(changePasswordDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {boolean} [enabled] 
         * @param {'SuperUser' | 'RegularUser' | 'ViewOnlyUser'} [userLevel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserGetUsersGet(enabled?: boolean, userLevel?: 'SuperUser' | 'RegularUser' | 'ViewOnlyUser', options?: any): AxiosPromise<Array<UserDTO>> {
            return localVarFp.apiUserGetUsersGet(enabled, userLevel, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserIdDelete(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiUserIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserIdGet(id: number, options?: any): AxiosPromise<UserDTO> {
            return localVarFp.apiUserIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {EditUserDTO} [editUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserIdPut(id: number, editUserDTO?: EditUserDTO, options?: any): AxiosPromise<UserDTO> {
            return localVarFp.apiUserIdPut(id, editUserDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AddNewUserDTO} [addNewUserDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost(addNewUserDTO?: AddNewUserDTO, options?: any): AxiosPromise<UserDTO> {
            return localVarFp.apiUserPost(addNewUserDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {ChangePasswordDTO} [changePasswordDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserChangePasswordPut(changePasswordDTO?: ChangePasswordDTO, options?: any) {
        return UserApiFp(this.configuration).apiUserChangePasswordPut(changePasswordDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {boolean} [enabled] 
     * @param {'SuperUser' | 'RegularUser' | 'ViewOnlyUser'} [userLevel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserGetUsersGet(enabled?: boolean, userLevel?: 'SuperUser' | 'RegularUser' | 'ViewOnlyUser', options?: any) {
        return UserApiFp(this.configuration).apiUserGetUsersGet(enabled, userLevel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserIdDelete(id: number, options?: any) {
        return UserApiFp(this.configuration).apiUserIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserIdGet(id: number, options?: any) {
        return UserApiFp(this.configuration).apiUserIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {EditUserDTO} [editUserDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserIdPut(id: number, editUserDTO?: EditUserDTO, options?: any) {
        return UserApiFp(this.configuration).apiUserIdPut(id, editUserDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AddNewUserDTO} [addNewUserDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserPost(addNewUserDTO?: AddNewUserDTO, options?: any) {
        return UserApiFp(this.configuration).apiUserPost(addNewUserDTO, options).then((request) => request(this.axios, this.basePath));
    }
}
