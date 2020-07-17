/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationURLParameter, OperationParameter } from "@azure/core-http";

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const numberBody: OperationParameter = {
  parameterPath: "numberBody",
  mapper: {
    serializedName: "numberBody",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const numberBody1: OperationParameter = {
  parameterPath: "numberBody",
  mapper: {
    defaultValue: 99999999.99,
    isConstant: true,
    serializedName: "numberBody",
    type: {
      name: "Number"
    }
  }
};

export const numberBody2: OperationParameter = {
  parameterPath: "numberBody",
  mapper: {
    defaultValue: -99999999.99,
    isConstant: true,
    serializedName: "numberBody",
    type: {
      name: "Number"
    }
  }
};