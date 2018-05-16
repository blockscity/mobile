export default {
  "contractName": "Owned",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610288806100606000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a6952301461005c5780632f54bf6e1461009f5780638da5cb5b146100fa575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610151565b005b3480156100ab57600080fd5b506100e0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101de565b604051808215151515815260200191505060405180910390f35b34801561010657600080fd5b5061010f610237565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015a336101de565b151561016557600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156101db57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582069e3e6e33e453fc77f644f1b7f5e6838bf747e22ebad4510ca65e3e069dd22560029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a6952301461005c5780632f54bf6e1461009f5780638da5cb5b146100fa575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610151565b005b3480156100ab57600080fd5b506100e0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101de565b604051808215151515815260200191505060405180910390f35b34801561010657600080fd5b5061010f610237565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015a336101de565b151561016557600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156101db57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582069e3e6e33e453fc77f644f1b7f5e6838bf747e22ebad4510ca65e3e069dd22560029",
  "sourceMap": "27:422:2:-;;;157:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;157:56:2;196:10;188:5;;:18;;;;;;;;;;;;;;;;;;27:422;;;;;;",
  "deployedSourceMap": "27:422:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;306:141;;8:9:-1;5:2;;;30:1;27;20:12;5:2;306:141:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;219:81;;8:9:-1;5:2;;;30:1;27;20:12;5:2;219:81:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;48:20:2;;;;;;;;;;;;;;;;;;;;;;;;;;;306:141;113:19;121:10;113:7;:19::i;:::-;105:28;;;;;;;;393:4;373:25;;:8;:25;;;;369:72;;;422:8;414:5;;:16;;;;;;;;;;;;;;;;;;369:72;306:141;:::o;219:81::-;271:4;293:5;;;;;;;;;;;285:13;;:4;:13;;;278:20;;219:81;;;:::o;48:20::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.21;\n\n\ncontract Owned {\n    address public owner;\n    modifier onlyOwner() {\n        require(isOwner(msg.sender));\n        _;\n    }\n\n    constructor() public {\n        owner = msg.sender;\n    }\n\n    function isOwner(address addr) public view returns (bool) {return addr == owner;}\n\n    function transfer(address newOwner) public onlyOwner {\n        if (newOwner != address(this)) {\n            owner = newOwner;\n        }\n    }\n}",
  "sourcePath": "/workspace/6c/startup/medivh/contracts/libs/Owned.sol",
  "ast": {
    "absolutePath": "/workspace/6c/startup/medivh/contracts/libs/Owned.sol",
    "exportedSymbols": {
      "Owned": [
        848
      ]
    },
    "id": 849,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 794,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 848,
        "linearizedBaseContracts": [
          848
        ],
        "name": "Owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 796,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 848,
            "src": "48:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 795,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "48:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 806,
              "nodeType": "Block",
              "src": "95:56:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 800,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 863,
                              "src": "121:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 801,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "121:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 799,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 828,
                          "src": "113:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 802,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "113:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 798,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        866,
                        867
                      ],
                      "referencedDeclaration": 866,
                      "src": "105:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "105:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 804,
                  "nodeType": "ExpressionStatement",
                  "src": "105:28:2"
                },
                {
                  "id": 805,
                  "nodeType": "PlaceholderStatement",
                  "src": "143:1:2"
                }
              ]
            },
            "documentation": null,
            "id": 807,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 797,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "92:2:2"
            },
            "src": "74:77:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 815,
              "nodeType": "Block",
              "src": "178:35:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 810,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 796,
                      "src": "188:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 811,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 863,
                        "src": "196:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 812,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "196:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "188:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 814,
                  "nodeType": "ExpressionStatement",
                  "src": "188:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 816,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "168:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "178:0:2"
            },
            "scope": 848,
            "src": "157:56:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 827,
              "nodeType": "Block",
              "src": "277:23:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 823,
                      "name": "addr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 818,
                      "src": "285:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 824,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 796,
                      "src": "293:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "285:13:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 822,
                  "id": 826,
                  "nodeType": "Return",
                  "src": "278:20:2"
                }
              ]
            },
            "documentation": null,
            "id": 828,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 818,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 828,
                  "src": "236:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "235:14:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 821,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 828,
                  "src": "271:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 820,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "270:6:2"
            },
            "scope": 848,
            "src": "219:81:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 846,
              "nodeType": "Block",
              "src": "359:88:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 835,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 830,
                      "src": "373:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 837,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 876,
                          "src": "393:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Owned_$848",
                            "typeString": "contract Owned"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Owned_$848",
                            "typeString": "contract Owned"
                          }
                        ],
                        "id": 836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "385:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 838,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "385:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "373:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 845,
                  "nodeType": "IfStatement",
                  "src": "369:72:2",
                  "trueBody": {
                    "id": 844,
                    "nodeType": "Block",
                    "src": "400:41:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 842,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 840,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 796,
                            "src": "414:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 841,
                            "name": "newOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 830,
                            "src": "422:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "414:16:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 843,
                        "nodeType": "ExpressionStatement",
                        "src": "414:16:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 847,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 833,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 832,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 807,
                  "src": "349:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "349:9:2"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 830,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "324:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "323:18:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "359:0:2"
            },
            "scope": 848,
            "src": "306:141:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 849,
        "src": "27:422:2"
      }
    ],
    "src": "0:449:2"
  },
  "legacyAST": {
    "absolutePath": "/workspace/6c/startup/medivh/contracts/libs/Owned.sol",
    "exportedSymbols": {
      "Owned": [
        848
      ]
    },
    "id": 849,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 794,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 848,
        "linearizedBaseContracts": [
          848
        ],
        "name": "Owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 796,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 848,
            "src": "48:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 795,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "48:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 806,
              "nodeType": "Block",
              "src": "95:56:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 800,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 863,
                              "src": "121:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 801,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "121:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 799,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 828,
                          "src": "113:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 802,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "113:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 798,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        866,
                        867
                      ],
                      "referencedDeclaration": 866,
                      "src": "105:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "105:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 804,
                  "nodeType": "ExpressionStatement",
                  "src": "105:28:2"
                },
                {
                  "id": 805,
                  "nodeType": "PlaceholderStatement",
                  "src": "143:1:2"
                }
              ]
            },
            "documentation": null,
            "id": 807,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 797,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "92:2:2"
            },
            "src": "74:77:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 815,
              "nodeType": "Block",
              "src": "178:35:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 810,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 796,
                      "src": "188:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 811,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 863,
                        "src": "196:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 812,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "196:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "188:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 814,
                  "nodeType": "ExpressionStatement",
                  "src": "188:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 816,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "168:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "178:0:2"
            },
            "scope": 848,
            "src": "157:56:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 827,
              "nodeType": "Block",
              "src": "277:23:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 823,
                      "name": "addr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 818,
                      "src": "285:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 824,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 796,
                      "src": "293:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "285:13:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 822,
                  "id": 826,
                  "nodeType": "Return",
                  "src": "278:20:2"
                }
              ]
            },
            "documentation": null,
            "id": 828,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 818,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 828,
                  "src": "236:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "235:14:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 821,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 828,
                  "src": "271:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 820,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "270:6:2"
            },
            "scope": 848,
            "src": "219:81:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 846,
              "nodeType": "Block",
              "src": "359:88:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 835,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 830,
                      "src": "373:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 837,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 876,
                          "src": "393:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Owned_$848",
                            "typeString": "contract Owned"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Owned_$848",
                            "typeString": "contract Owned"
                          }
                        ],
                        "id": 836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "385:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 838,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "385:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "373:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 845,
                  "nodeType": "IfStatement",
                  "src": "369:72:2",
                  "trueBody": {
                    "id": 844,
                    "nodeType": "Block",
                    "src": "400:41:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 842,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 840,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 796,
                            "src": "414:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 841,
                            "name": "newOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 830,
                            "src": "422:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "414:16:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 843,
                        "nodeType": "ExpressionStatement",
                        "src": "414:16:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 847,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 833,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 832,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 807,
                  "src": "349:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "349:9:2"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 830,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "324:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "323:18:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "359:0:2"
            },
            "scope": 848,
            "src": "306:141:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 849,
        "src": "27:422:2"
      }
    ],
    "src": "0:449:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-14T17:25:15.174Z"
}