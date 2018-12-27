/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";

export { BaseResource, CloudError };

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestParameterizedHostTestClientOptions.
 */
export interface AutoRestParameterizedHostTestClientOptions extends AzureServiceClientOptions {
  /**
   * A string value that is used as a global part of the parameterized host. Default value: 'host'.
   */
  host?: string;
}
