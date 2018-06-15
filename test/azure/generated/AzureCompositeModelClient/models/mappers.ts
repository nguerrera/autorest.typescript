/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Product = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      productId: {
        serializedName: "product_id",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "display_name",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        defaultValue: '100',
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CatalogDictionary = {
  serializedName: "CatalogDictionary",
  type: {
    name: "Composite",
    className: "CatalogDictionary",
    modelProperties: {
      productDictionary: {
        serializedName: "productDictionary",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "ProductElementType",
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      }
    }
  }
};

export const CatalogArray = {
  serializedName: "CatalogArray",
  type: {
    name: "Composite",
    className: "CatalogArray",
    modelProperties: {
      productArray: {
        serializedName: "productArray",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ProductElementType",
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      }
    }
  }
};

export const CatalogArrayOfDictionary = {
  serializedName: "CatalogArrayOfDictionary",
  type: {
    name: "Composite",
    className: "CatalogArrayOfDictionary",
    modelProperties: {
      productArrayOfDictionary: {
        serializedName: "productArrayOfDictionary",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ObjectElementType",
            type: {
              name: "Dictionary",
              value: {
                serializedName: "ProductElementType",
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const CatalogDictionaryOfArray = {
  serializedName: "CatalogDictionaryOfArray",
  type: {
    name: "Composite",
    className: "CatalogDictionaryOfArray",
    modelProperties: {
      productDictionaryOfArray: {
        serializedName: "productDictionaryOfArray",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "ArrayElementType",
            type: {
              name: "Sequence",
              element: {
                serializedName: "ProductElementType",
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const ErrorModel = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Basic = {
  serializedName: "basic",
  type: {
    name: "Composite",
    className: "Basic",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Pet = {
  serializedName: "pet",
  type: {
    name: "Composite",
    className: "Pet",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dog = {
  serializedName: "dog",
  type: {
    name: "Composite",
    className: "Dog",
    modelProperties: {
      ...Pet.type.modelProperties,
      food: {
        serializedName: "food",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cat = {
  serializedName: "cat",
  type: {
    name: "Composite",
    className: "Cat",
    modelProperties: {
      ...Pet.type.modelProperties,
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      },
      hates: {
        serializedName: "hates",
        type: {
          name: "Sequence",
          element: {
            serializedName: "DogElementType",
            type: {
              name: "Composite",
              className: "Dog"
            }
          }
        }
      }
    }
  }
};

export const Siamese = {
  serializedName: "siamese",
  type: {
    name: "Composite",
    className: "Siamese",
    modelProperties: {
      ...Cat.type.modelProperties,
      breed: {
        serializedName: "breed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Fish = {
  serializedName: "Fish",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "fishtype",
      clientName: "fishtype"
    },
    uberParent: "Fish",
    className: "Fish",
    modelProperties: {
      species: {
        serializedName: "species",
        type: {
          name: "String"
        }
      },
      length: {
        required: true,
        serializedName: "length",
        type: {
          name: "Number"
        }
      },
      siblings: {
        serializedName: "siblings",
        type: {
          name: "Sequence",
          element: {
            serializedName: "FishElementType",
            type: {
              name: "Composite",
              polymorphicDiscriminator: {
                serializedName: "fishtype",
                clientName: "fishtype"
              },
              uberParent: "Fish",
              className: "Fish"
            }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: "fishtype",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Salmon = {
  serializedName: "salmon",
  type: {
    name: "Composite",
    className: "Salmon",
    modelProperties: {
      ...Fish.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      iswild: {
        serializedName: "iswild",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SmartSalmon = {
  serializedName: "smart_salmon",
  type: {
    name: "Composite",
    className: "SmartSalmon",
    modelProperties: {
      ...Salmon.type.modelProperties,
      additionalProperties: {
        type: {
          name: "Dictionary",
          value: {
            serializedName: "ObjectElementType",
            type: {
              name: "Object"
            }
          }
        }
      },
      collegeDegree: {
        serializedName: "college_degree",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Shark = {
  serializedName: "shark",
  type: {
    name: "Composite",
    className: "Shark",
    modelProperties: {
      ...Fish.type.modelProperties,
      age: {
        serializedName: "age",
        type: {
          name: "Number"
        }
      },
      birthday: {
        required: true,
        serializedName: "birthday",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Sawshark = {
  serializedName: "sawshark",
  type: {
    name: "Composite",
    className: "Sawshark",
    modelProperties: {
      ...Shark.type.modelProperties,
      picture: {
        serializedName: "picture",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const Goblinshark = {
  serializedName: "goblin",
  type: {
    name: "Composite",
    className: "Goblinshark",
    modelProperties: {
      ...Shark.type.modelProperties,
      jawsize: {
        serializedName: "jawsize",
        type: {
          name: "Number"
        }
      },
      color: {
        serializedName: "color",
        defaultValue: 'gray',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cookiecuttershark = {
  serializedName: "cookiecuttershark",
  type: {
    name: "Composite",
    className: "Cookiecuttershark",
    modelProperties: {
      ...Shark.type.modelProperties
    }
  }
};

export const IntWrapper = {
  serializedName: "int-wrapper",
  type: {
    name: "Composite",
    className: "IntWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LongWrapper = {
  serializedName: "long-wrapper",
  type: {
    name: "Composite",
    className: "LongWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FloatWrapper = {
  serializedName: "float-wrapper",
  type: {
    name: "Composite",
    className: "FloatWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DoubleWrapper = {
  serializedName: "double-wrapper",
  type: {
    name: "Composite",
    className: "DoubleWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: {
        serializedName: "field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BooleanWrapper = {
  serializedName: "boolean-wrapper",
  type: {
    name: "Composite",
    className: "BooleanWrapper",
    modelProperties: {
      fieldTrue: {
        serializedName: "field_true",
        type: {
          name: "Boolean"
        }
      },
      fieldFalse: {
        serializedName: "field_false",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StringWrapper = {
  serializedName: "string-wrapper",
  type: {
    name: "Composite",
    className: "StringWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "String"
        }
      },
      empty: {
        serializedName: "empty",
        type: {
          name: "String"
        }
      },
      nullProperty: {
        serializedName: "null",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DateWrapper = {
  serializedName: "date-wrapper",
  type: {
    name: "Composite",
    className: "DateWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "Date"
        }
      },
      leap: {
        serializedName: "leap",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const DatetimeWrapper = {
  serializedName: "datetime-wrapper",
  type: {
    name: "Composite",
    className: "DatetimeWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "DateTime"
        }
      },
      now: {
        serializedName: "now",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Datetimerfc1123Wrapper = {
  serializedName: "datetimerfc1123-wrapper",
  type: {
    name: "Composite",
    className: "Datetimerfc1123Wrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      now: {
        serializedName: "now",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const DurationWrapper = {
  serializedName: "duration-wrapper",
  type: {
    name: "Composite",
    className: "DurationWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const ByteWrapper = {
  serializedName: "byte-wrapper",
  type: {
    name: "Composite",
    className: "ByteWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ArrayWrapper = {
  serializedName: "array-wrapper",
  type: {
    name: "Composite",
    className: "ArrayWrapper",
    modelProperties: {
      arrayProperty: {
        serializedName: "array",
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DictionaryWrapper = {
  serializedName: "dictionary-wrapper",
  type: {
    name: "Composite",
    className: "DictionaryWrapper",
    modelProperties: {
      defaultProgram: {
        serializedName: "defaultProgram",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ReadonlyObj = {
  serializedName: "readonly-obj",
  type: {
    name: "Composite",
    className: "ReadonlyObj",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MyBaseType = {
  serializedName: "MyBaseType",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    uberParent: "MyBaseType",
    className: "MyBaseType",
    modelProperties: {
      propB1: {
        serializedName: "propB1",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      propBH1: {
        serializedName: "helper.propBH1",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MyDerivedType = {
  serializedName: "Kind1",
  type: {
    name: "Composite",
    className: "MyDerivedType",
    modelProperties: {
      ...MyBaseType.type.modelProperties,
      propD1: {
        serializedName: "propD1",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureCompositeModelCreateOptionalParams = {
  serializedName: "CreateOptions",
  type: {
    name: "Composite",
    className: "AzureCompositeModelCreateOptionalParams",
    modelProperties: {
      productDictionaryOfArray: {
        serializedName: "productDictionaryOfArray",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "ArrayElementType",
            type: {
              name: "Sequence",
              element: {
                serializedName: "ProductElementType",
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const AzureCompositeModelUpdateOptionalParams = {
  serializedName: "UpdateOptions",
  type: {
    name: "Composite",
    className: "AzureCompositeModelUpdateOptionalParams",
    modelProperties: {
      productArrayOfDictionary: {
        serializedName: "productArrayOfDictionary",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ObjectElementType",
            type: {
              name: "Dictionary",
              value: {
                serializedName: "ProductElementType",
                type: {
                  name: "Composite",
                  className: "Product"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const PrimitivePutDurationOptionalParams = {
  serializedName: "PutDurationOptions",
  type: {
    name: "Composite",
    className: "PrimitivePutDurationOptionalParams",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const PrimitivePutByteOptionalParams = {
  serializedName: "PutByteOptions",
  type: {
    name: "Composite",
    className: "PrimitivePutByteOptionalParams",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ArrayModelPutValidOptionalParams = {
  serializedName: "PutValidOptions",
  type: {
    name: "Composite",
    className: "ArrayModelPutValidOptionalParams",
    modelProperties: {
      arrayProperty: {
        serializedName: "array",
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ArrayModelPutEmptyOptionalParams = {
  serializedName: "PutEmptyOptions",
  type: {
    name: "Composite",
    className: "ArrayModelPutEmptyOptionalParams",
    modelProperties: {
      arrayProperty: {
        serializedName: "array",
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DictionaryPutValidOptionalParams = {
  serializedName: "PutValidOptions",
  type: {
    name: "Composite",
    className: "DictionaryPutValidOptionalParams",
    modelProperties: {
      defaultProgram: {
        serializedName: "defaultProgram",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DictionaryPutEmptyOptionalParams = {
  serializedName: "PutEmptyOptions",
  type: {
    name: "Composite",
    className: "DictionaryPutEmptyOptionalParams",
    modelProperties: {
      defaultProgram: {
        serializedName: "defaultProgram",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ReadonlypropertyPutValidOptionalParams = {
  serializedName: "PutValidOptions",
  type: {
    name: "Composite",
    className: "ReadonlypropertyPutValidOptionalParams",
    modelProperties: {
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const discriminators = {
  'Fish' : Fish,
  'Fish.salmon' : Salmon,
  'Fish.smart_salmon' : SmartSalmon,
  'Fish.shark' : Shark,
  'Fish.sawshark' : Sawshark,
  'Fish.goblin' : Goblinshark,
  'Fish.cookiecuttershark' : Cookiecuttershark,
  'MyBaseType' : MyBaseType,
  'MyBaseType.Kind1' : MyDerivedType
};
