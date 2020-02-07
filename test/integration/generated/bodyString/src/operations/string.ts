/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyStringClient } from "../bodyStringClient";

/**
 * Class representing a String.
 */
export class String {
  private readonly client: BodyStringClient;

  /**
   * Initialize a new instance of the class String class.
   * @param client Reference to the service client
   */
  constructor(client: BodyStringClient) {
    this.client = client;
  }

  /**
   * Get null string value value
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetNullResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullOperationSpec
    ) as Promise<Models.StringGetNullResponse>;
  }

  /**
   * Set string value null
   * @param options The options parameters.
   */
  putNull(
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { options },
      putNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get empty string value value ''
   * @param options The options parameters.
   */
  getEmpty(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetEmptyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyOperationSpec
    ) as Promise<Models.StringGetEmptyResponse>;
  }

  /**
   * Set string value empty ''
   * @param options The options parameters.
   */
  putEmpty(
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { options },
      putEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
   * @param options The options parameters.
   */
  getMbcs(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetMbcsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMbcsOperationSpec
    ) as Promise<Models.StringGetMbcsResponse>;
  }

  /**
   * Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
   * @param options The options parameters.
   */
  putMbcs(
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { options },
      putMbcsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all
   * good men to come to the aid of their country<tab><space><space>'
   * @param options The options parameters.
   */
  getWhitespace(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetWhitespaceResponse> {
    return this.client.sendOperationRequest(
      { options },
      getWhitespaceOperationSpec
    ) as Promise<Models.StringGetWhitespaceResponse>;
  }

  /**
   * Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all
   * good men to come to the aid of their country<tab><space><space>'
   * @param options The options parameters.
   */
  putWhitespace(
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { options },
      putWhitespaceOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get String value when no string value is sent in response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNotProvidedOperationSpec
    ) as Promise<Models.StringGetNotProvidedResponse>;
  }

  /**
   * Get value that is base64 encoded
   * @param options The options parameters.
   */
  getBase64Encoded(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetBase64EncodedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBase64EncodedOperationSpec
    ) as Promise<Models.StringGetBase64EncodedResponse>;
  }

  /**
   * Get value that is base64url encoded
   * @param options The options parameters.
   */
  getBase64UrlEncoded(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetBase64UrlEncodedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBase64UrlEncodedOperationSpec
    ) as Promise<Models.StringGetBase64UrlEncodedResponse>;
  }

  /**
   * Put value that is base64url encoded
   * @param stringBody
   * @param options The options parameters.
   */
  putBase64UrlEncoded(
    stringBody: Uint8Array,
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { stringBody, options },
      putBase64UrlEncodedOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null value that is expected to be base64url encoded
   * @param options The options parameters.
   */
  getNullBase64UrlEncoded(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.StringGetNullBase64UrlEncodedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullBase64UrlEncodedOperationSpec
    ) as Promise<Models.StringGetNullBase64UrlEncodedResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/string/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "string" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putNullOperationSpec: coreHttp.OperationSpec = {
  path: "/string/null",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody,
  urlParameters: [Parameters.$host],
  serializer
};
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/string/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "string" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/string/empty",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody1,
  urlParameters: [Parameters.$host],
  serializer
};
const getMbcsOperationSpec: coreHttp.OperationSpec = {
  path: "/string/mbcs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "string" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putMbcsOperationSpec: coreHttp.OperationSpec = {
  path: "/string/mbcs",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody2,
  urlParameters: [Parameters.$host],
  serializer
};
const getWhitespaceOperationSpec: coreHttp.OperationSpec = {
  path: "/string/whitespace",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "string" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putWhitespaceOperationSpec: coreHttp.OperationSpec = {
  path: "/string/whitespace",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody3,
  urlParameters: [Parameters.$host],
  serializer
};
const getNotProvidedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/notProvided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "string" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getBase64EncodedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/base64Encoding",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Base64Url" }, serializedName: "byte-array" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getBase64UrlEncodedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/base64UrlEncoding",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Base64Url" }, serializedName: "byte-array" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putBase64UrlEncodedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/base64UrlEncoding",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody4,
  urlParameters: [Parameters.$host],
  serializer
};
const getNullBase64UrlEncodedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/nullBase64UrlEncoding",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Base64Url" }, serializedName: "byte-array" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
