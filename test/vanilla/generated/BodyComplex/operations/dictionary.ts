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
import * as Mappers from "../models/dictionaryMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Dictionary. */
export class Dictionary {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Dictionary.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types with dictionary property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec);
  }

  /**
   * Put complex types with dictionary property
   *
   * @param {DictionaryPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValidWithHttpOperationResponse(options?: Models.DictionaryPutValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putValidOperationSpec);
  }

  /**
   * Get complex types with dictionary property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmptyWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec);
  }

  /**
   * Put complex types with dictionary property which is empty
   *
   * @param {DictionaryPutEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putEmptyWithHttpOperationResponse(options?: Models.DictionaryPutEmptyOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putEmptyOperationSpec);
  }

  /**
   * Get complex types with dictionary property which is null
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNullWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec);
  }

  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNotProvidedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNotProvidedOperationSpec);
  }

  /**
   * Get complex types with dictionary property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.DictionaryWrapper>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getValid(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    return msRest.responseToBody(this.getValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types with dictionary property
   *
   * @param {DictionaryPutValidOptionalParams} [options] Optional Parameters.
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
  putValid(): Promise<void>;
  putValid(options: Models.DictionaryPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.DictionaryPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.DictionaryPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get complex types with dictionary property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(): Promise<Models.DictionaryWrapper>;
  getEmpty(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getEmpty(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    return msRest.responseToBody(this.getEmptyWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types with dictionary property which is empty
   *
   * @param {DictionaryPutEmptyOptionalParams} [options] Optional Parameters.
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
  putEmpty(): Promise<void>;
  putEmpty(options: Models.DictionaryPutEmptyOptionalParams): Promise<void>;
  putEmpty(callback: msRest.ServiceCallback<void>): void;
  putEmpty(options: Models.DictionaryPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putEmpty(options?: Models.DictionaryPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putEmptyWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get complex types with dictionary property which is null
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNull(): Promise<Models.DictionaryWrapper>;
  getNull(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getNull(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    return msRest.responseToBody(this.getNullWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNotProvided(): Promise<Models.DictionaryWrapper>;
  getNotProvided(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getNotProvided(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    return msRest.responseToBody(this.getNotProvidedWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/valid",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/dictionary/typed/valid",
  requestBody: {
    parameterPath: {
      defaultProgram: [
        "options",
        "defaultProgram"
      ]
    },
    mapper: {
      ...Mappers.DictionaryWrapper,
      required: true
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

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/empty",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/dictionary/typed/empty",
  requestBody: {
    parameterPath: {
      defaultProgram: [
        "options",
        "defaultProgram"
      ]
    },
    mapper: {
      ...Mappers.DictionaryWrapper,
      required: true
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

const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/null",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getNotProvidedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/notprovided",
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
