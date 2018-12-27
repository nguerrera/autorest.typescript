/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestSwaggerBATByteServiceOptions.
 */
export interface AutoRestSwaggerBATByteServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the getNull operation.
 */
export type ByteModelGetNullResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type ByteModelGetEmptyResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};

/**
 * Contains response data for the getNonAscii operation.
 */
export type ByteModelGetNonAsciiResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};

/**
 * Contains response data for the getInvalid operation.
 */
export type ByteModelGetInvalidResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};
