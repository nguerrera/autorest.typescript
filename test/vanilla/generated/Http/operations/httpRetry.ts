/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/httpRetryMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpRetry. */
export class HttpRetry {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpRetry.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 408 status code, then 200 after retry
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  head408WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head408OperationSpec);
  }

  /**
   * Return 500 status code, then 200 after retry
   *
   * @param {HttpRetryPut500OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  put500WithHttpOperationResponse(options?: Models.HttpRetryPut500OptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put500OperationSpec);
  }

  /**
   * Return 500 status code, then 200 after retry
   *
   * @param {HttpRetryPatch500OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  patch500WithHttpOperationResponse(options?: Models.HttpRetryPatch500OptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch500OperationSpec);
  }

  /**
   * Return 502 status code, then 200 after retry
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get502WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get502OperationSpec);
  }

  /**
   * Return 503 status code, then 200 after retry
   *
   * @param {HttpRetryPost503OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  post503WithHttpOperationResponse(options?: Models.HttpRetryPost503OptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post503OperationSpec);
  }

  /**
   * Return 503 status code, then 200 after retry
   *
   * @param {HttpRetryDelete503OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  delete503WithHttpOperationResponse(options?: Models.HttpRetryDelete503OptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete503OperationSpec);
  }

  /**
   * Return 504 status code, then 200 after retry
   *
   * @param {HttpRetryPut504OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  put504WithHttpOperationResponse(options?: Models.HttpRetryPut504OptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put504OperationSpec);
  }

  /**
   * Return 504 status code, then 200 after retry
   *
   * @param {HttpRetryPatch504OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  patch504WithHttpOperationResponse(options?: Models.HttpRetryPatch504OptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch504OperationSpec);
  }

  /**
   * Return 408 status code, then 200 after retry
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head408(): Promise<void>;
  head408(options: msRest.RequestOptionsBase): Promise<void>;
  head408(callback: msRest.ServiceCallback<void>): void;
  head408(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head408(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.head408WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 500 status code, then 200 after retry
   *
   * @param {HttpRetryPut500OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  put500(): Promise<void>;
  put500(options: Models.HttpRetryPut500OptionalParams): Promise<void>;
  put500(callback: msRest.ServiceCallback<void>): void;
  put500(options: Models.HttpRetryPut500OptionalParams, callback: msRest.ServiceCallback<void>): void;
  put500(options?: Models.HttpRetryPut500OptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.put500WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 500 status code, then 200 after retry
   *
   * @param {HttpRetryPatch500OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  patch500(): Promise<void>;
  patch500(options: Models.HttpRetryPatch500OptionalParams): Promise<void>;
  patch500(callback: msRest.ServiceCallback<void>): void;
  patch500(options: Models.HttpRetryPatch500OptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch500(options?: Models.HttpRetryPatch500OptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.patch500WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 502 status code, then 200 after retry
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get502(): Promise<void>;
  get502(options: msRest.RequestOptionsBase): Promise<void>;
  get502(callback: msRest.ServiceCallback<void>): void;
  get502(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get502(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.get502WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 503 status code, then 200 after retry
   *
   * @param {HttpRetryPost503OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  post503(): Promise<void>;
  post503(options: Models.HttpRetryPost503OptionalParams): Promise<void>;
  post503(callback: msRest.ServiceCallback<void>): void;
  post503(options: Models.HttpRetryPost503OptionalParams, callback: msRest.ServiceCallback<void>): void;
  post503(options?: Models.HttpRetryPost503OptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.post503WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 503 status code, then 200 after retry
   *
   * @param {HttpRetryDelete503OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  delete503(): Promise<void>;
  delete503(options: Models.HttpRetryDelete503OptionalParams): Promise<void>;
  delete503(callback: msRest.ServiceCallback<void>): void;
  delete503(options: Models.HttpRetryDelete503OptionalParams, callback: msRest.ServiceCallback<void>): void;
  delete503(options?: Models.HttpRetryDelete503OptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.delete503WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 504 status code, then 200 after retry
   *
   * @param {HttpRetryPut504OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  put504(): Promise<void>;
  put504(options: Models.HttpRetryPut504OptionalParams): Promise<void>;
  put504(callback: msRest.ServiceCallback<void>): void;
  put504(options: Models.HttpRetryPut504OptionalParams, callback: msRest.ServiceCallback<void>): void;
  put504(options?: Models.HttpRetryPut504OptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.put504WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 504 status code, then 200 after retry
   *
   * @param {HttpRetryPatch504OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  patch504(): Promise<void>;
  patch504(options: Models.HttpRetryPatch504OptionalParams): Promise<void>;
  patch504(callback: msRest.ServiceCallback<void>): void;
  patch504(options: Models.HttpRetryPatch504OptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch504(options?: Models.HttpRetryPatch504OptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.patch504WithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const head408OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/retry/408",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const put500OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/retry/500",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const patch500OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/retry/500",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const get502OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/retry/502",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const post503OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/retry/503",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const delete503OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/retry/503",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const put504OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/retry/504",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const patch504OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/retry/504",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
