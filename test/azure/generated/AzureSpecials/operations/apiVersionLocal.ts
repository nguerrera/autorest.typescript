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
import * as Mappers from "../models/apiVersionLocalMappers";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a ApiVersionLocal. */
export class ApiVersionLocal {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a ApiVersionLocal.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMethodLocalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodLocalValidOperationSpec);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   *
   * @param {ApiVersionLocalGetMethodLocalNullOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMethodLocalNullWithHttpOperationResponse(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodLocalNullOperationSpec);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getPathLocalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPathLocalValidOperationSpec);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getSwaggerLocalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSwaggerLocalValidOperationSpec);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
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
  getMethodLocalValid(): Promise<void>;
  getMethodLocalValid(options: msRest.RequestOptionsBase): Promise<void>;
  getMethodLocalValid(callback: msRest.ServiceCallback<void>): void;
  getMethodLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getMethodLocalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getMethodLocalValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   *
   * @param {ApiVersionLocalGetMethodLocalNullOptionalParams} [options] Optional Parameters.
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
  getMethodLocalNull(): Promise<void>;
  getMethodLocalNull(options: Models.ApiVersionLocalGetMethodLocalNullOptionalParams): Promise<void>;
  getMethodLocalNull(callback: msRest.ServiceCallback<void>): void;
  getMethodLocalNull(options: Models.ApiVersionLocalGetMethodLocalNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getMethodLocalNull(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getMethodLocalNullWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
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
  getPathLocalValid(): Promise<void>;
  getPathLocalValid(options: msRest.RequestOptionsBase): Promise<void>;
  getPathLocalValid(callback: msRest.ServiceCallback<void>): void;
  getPathLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getPathLocalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getPathLocalValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
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
  getSwaggerLocalValid(): Promise<void>;
  getSwaggerLocalValid(options: msRest.RequestOptionsBase): Promise<void>;
  getSwaggerLocalValid(callback: msRest.ServiceCallback<void>): void;
  getSwaggerLocalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getSwaggerLocalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getSwaggerLocalValidWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const getMethodLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/2.0",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2.0',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getMethodLocalNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/null",
  queryParameters: [
    {
      parameterPath: [
        "options",
        "apiVersion"
      ],
      mapper: {
        serializedName: "api-version",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getPathLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/path/string/none/query/local/2.0",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2.0',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getSwaggerLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/swagger/string/none/query/local/2.0",
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2.0',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
