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
import * as Mappers from "../models/headerMappers";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a Header. */
export class Header {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a Header.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  customNamedRequestIdWithHttpOperationResponse(fooClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdResponse> {
    return this.client.sendOperationRequest(
      {
        fooClientRequestId,
        options
      },
      customNamedRequestIdOperationSpec);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request,
   * via a parameter group
   *
   * @param {HeaderCustomNamedRequestIdParamGroupingParameters}
   * headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  customNamedRequestIdParamGroupingWithHttpOperationResponse(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdParamGroupingResponse> {
    return this.client.sendOperationRequest(
      {
        headerCustomNamedRequestIdParamGroupingParameters,
        options
      },
      customNamedRequestIdParamGroupingOperationSpec);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  customNamedRequestIdHeadWithHttpOperationResponse(fooClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdHeadResponse> {
    return this.client.sendOperationRequest(
      {
        fooClientRequestId,
        options
      },
      customNamedRequestIdHeadOperationSpec).then(operationRes => {
      // Deserialize Response
      const statusCode = operationRes.status;
      operationRes.parsedBody = (statusCode === 200);
      return operationRes;
    });
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
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
  customNamedRequestId(fooClientRequestId: string): Promise<void>;
  customNamedRequestId(fooClientRequestId: string, options: msRest.RequestOptionsBase): Promise<void>;
  customNamedRequestId(fooClientRequestId: string, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestId(fooClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestId(fooClientRequestId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.customNamedRequestIdWithHttpOperationResponse.bind(this), fooClientRequestId, options, callback);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request,
   * via a parameter group
   *
   * @param {HeaderCustomNamedRequestIdParamGroupingParameters}
   * headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the operation
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
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters): Promise<void>;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options: msRest.RequestOptionsBase): Promise<void>;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.customNamedRequestIdParamGroupingWithHttpOperationResponse.bind(this), headerCustomNamedRequestIdParamGroupingParameters, options, callback);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {boolean} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  customNamedRequestIdHead(fooClientRequestId: string): Promise<boolean>;
  customNamedRequestIdHead(fooClientRequestId: string, options: msRest.RequestOptionsBase): Promise<boolean>;
  customNamedRequestIdHead(fooClientRequestId: string, callback: msRest.ServiceCallback<boolean>): void;
  customNamedRequestIdHead(fooClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  customNamedRequestIdHead(fooClientRequestId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): any {
    return msRest.responseToBody(this.customNamedRequestIdHeadWithHttpOperationResponse.bind(this), fooClientRequestId, options, callback);
  }

}

// Operation Specifications
const customNamedRequestIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/customNamedRequestId",
  headerParameters: [
    {
      parameterPath: "fooClientRequestId",
      mapper: {
        required: true,
        serializedName: "foo-client-request-id",
        type: {
          name: "String"
        }
      }
    },
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
    200: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const customNamedRequestIdParamGroupingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/customNamedRequestIdParamGrouping",
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
    },
    {
      parameterPath: [
        "headerCustomNamedRequestIdParamGroupingParameters",
        "fooClientRequestId"
      ],
      mapper: {
        required: true,
        serializedName: "foo-client-request-id",
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdParamGroupingHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const customNamedRequestIdHeadOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "azurespecials/customNamedRequestIdHead",
  headerParameters: [
    {
      parameterPath: "fooClientRequestId",
      mapper: {
        required: true,
        serializedName: "foo-client-request-id",
        type: {
          name: "String"
        }
      }
    },
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
    200: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdHeadHeaders
    },
    404: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdHeadHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
