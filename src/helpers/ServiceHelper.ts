import store from '@/store';
import router from '@/router';
import ErrorDetails from '@/models/ErrorDetails';

export default class ServiceHelper {
  /**
   * Check if current authentication status is valid - by bearer token and expire on.
   * @param token Bearer token.
   * @param expiresOn Expire on value.
   */
  public static CheckAuthentication = function (token: string | null | undefined, expiresOn: string | null | undefined) {
    let authenticated = !ServiceHelper.IsNullOrEmpty(token) && !ServiceHelper.IsNullOrEmpty(expiresOn);
    if (!ServiceHelper.IsNullOrEmpty(expiresOn)) {
      authenticated = authenticated && new Date(expiresOn as string) >= new Date();
    }

    return authenticated;
  }

  /**
   * Check if object is null or empty.
   * @param obj Object.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static IsNullOrEmpty(obj: any): boolean {
    // https://stackoverflow.com/questions/44337856/check-if-specific-object-is-empty-in-typescript/44338054
    let isEmpty = obj == null || obj == undefined;
    if (!isEmpty) {
      if (typeof obj === 'string') {
        isEmpty = obj == "";
      }
      else if (typeof obj === 'object') {
        isEmpty = Object.keys(obj).length == 0;
      }
    }

    return isEmpty;
  }

  /**
   * Check response by status code.
   * @param status Status code.
   */
  public static CheckResponseStatusCode(status: number) {
    if (status == undefined) {
      return false;
    }
    else if (status == 401) {
      this.LogoutAndRedirectToLogin();

      return false;
    }

    return true;
  }

  /**
   * Parse error message from error.
   * @param error Error.
   * @param prefix Prefix for error message.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static GetErrorMessage(error: any, prefix: string = ""): string {
    let errMessage = prefix ?? "";
    try {
      errMessage += error?.response.data.message ?? "";
    } catch (e) {
      errMessage += error ?? "";
    }
    errMessage = errMessage?.trim() ?? "";

    return errMessage;
  }

  /**
 * Parse Api error depends on environment into error type of ErrorDetails.
 * @param apiError Api error.
 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static GetErrorMessageFromApiError(apiError: any): ErrorDetails {
    let errorDetails = {} as ErrorDetails;
    if (process.env.NODE_ENV === 'production') {
      errorDetails = ServiceHelper.CloneObject<ErrorDetails>(apiError.response.data);
    }
    else {
      errorDetails = new ErrorDetails(apiError.response?.data ?? -1, apiError.response?.data ?? "", apiError.response?.request.responseURL ?? "");
      const positionOfEndOfMessage = errorDetails.Message.toString().indexOf("\n");
      if (positionOfEndOfMessage > -1) {
        errorDetails.Message = errorDetails.Message.slice(0, positionOfEndOfMessage);
      }
    }

    return errorDetails;
  }

  /**
 * Clone given object of type T.
 * @param obj Object to clone.
 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static CloneObject<T>(obj: any): T {
    const clone = JSON.parse(JSON.stringify(obj)) as T;

    return clone;
  }

  /**
   * Do logout and redirect to login page.
   */
  public static LogoutAndRedirectToLogin() {
    store.dispatch.user.LOGOUT();
    router.push({ name: "login" });
  }
}
