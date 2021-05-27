/**
 * Error Details is used for error handling in production environment.
 */
export default class ErrorDetails {
    StatusCode: number;
    Message: string;
    Path: string;

    constructor(statusCode: number, message: string, path: string) {
        this.StatusCode = statusCode;
        this.Message = message;
        this.Path = path;
    }
}
