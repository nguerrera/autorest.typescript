/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import { AutoRestReportServiceForAzureContext } from "./autoRestReportServiceForAzureContext";


class AutoRestReportServiceForAzure extends AutoRestReportServiceForAzureContext {
  /**
   * @class
   * Initializes a new instance of the AutoRestReportServiceForAzure class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, baseUri, options);
  }
  // methods on the client.

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceForAzureGetReportOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getReportWithHttpOperationResponse(options?: Models.AutoRestReportServiceForAzureGetReportOptionalParams): Promise<msRest.HttpOperationResponse<{ [propertyName: string]: number }>> {
    return this.sendOperationRequest(
      {
        options
      },
      getReportOperationSpec);
  }

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceForAzureGetReportOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {{ [propertyName: string]: number }} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getReport(): Promise<{ [propertyName: string]: number }>;
  getReport(options: Models.AutoRestReportServiceForAzureGetReportOptionalParams): Promise<{ [propertyName: string]: number }>;
  getReport(callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options: Models.AutoRestReportServiceForAzureGetReportOptionalParams, callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options?: Models.AutoRestReportServiceForAzureGetReportOptionalParams, callback?: msRest.ServiceCallback<{ [propertyName: string]: number }>): any {
    return msRest.responseToBody(this.getReportWithHttpOperationResponse.bind(this), options, callback);
  }
}

// Operation Specifications
const getReportOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "report/azure",
  queryParameters: [
    {
      parameterPath: [
        "options",
        "qualifier"
      ],
      mapper: {
        serializedName: "qualifier",
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
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "numberElementType",
            type: {
              name: "Number"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

export { AutoRestReportServiceForAzure, Models as AutoRestReportServiceForAzureModels, Mappers as AutoRestReportServiceForAzureMappers };
