export default {
  "contractName": "Migrations",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
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
      "constant": false,
      "inputs": [
        {
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "new_address",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102f8806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a7230582002657bbc3fccab5601ff395c7e94c843e0de034c82df472295ca65f6d97cd68b0029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a7230582002657bbc3fccab5601ff395c7e94c843e0de034c82df472295ca65f6d97cd68b0029",
  "sourceMap": "26:521:1:-;;;192:57;8:9:-1;5:2;;;30:1;27;20:12;5:2;192:57:1;232:10;224:5;;:18;;;;;;;;;;;;;;;;;;26:521;;;;;;",
  "deployedSourceMap": "26:521:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;370:175;;8:9:-1;5:2;;;30:1;27;20:12;5:2;370:175:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;78:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;78:36:1;;;;;;;;;;;;;;;;;;;;;;;52:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;52:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;255:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;255:109:1;;;;;;;;;;;;;;;;;;;;;;;;;;370:175;436:19;171:5;;;;;;;;;;;157:19;;:10;:19;;;153:26;;;469:11;436:45;;491:8;:21;;;513:24;;491:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;491:47:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;491:47:1;;;;153:26;370:175;;:::o;78:36::-;;;;:::o;52:20::-;;;;;;;;;;;;;:::o;255:109::-;171:5;;;;;;;;;;;157:19;;:10;:19;;;153:26;;;348:9;321:24;:36;;;;153:26;255:109;:::o",
  "source": "pragma solidity ^0.4.21;\n\ncontract Migrations {\n    address public owner;\n    uint public last_completed_migration;\n\n    modifier restricted() {\n        if (msg.sender == owner) _;\n    }\n\n    constructor () public {\n        owner = msg.sender;\n    }\n\n    function setCompleted(uint completed) public restricted {\n        last_completed_migration = completed;\n    }\n\n    function upgrade(address new_address) public restricted {\n        Migrations upgraded = Migrations(new_address);\n        upgraded.setCompleted(last_completed_migration);\n    }\n}\n",
  "sourcePath": "/workspace/6c/startup/medivh/contracts/Migrations.sol",
  "ast": {
    "absolutePath": "/workspace/6c/startup/medivh/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        775
      ]
    },
    "id": 776,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 720,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 775,
        "linearizedBaseContracts": [
          775
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 722,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 775,
            "src": "52:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 721,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "52:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 724,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 775,
            "src": "78:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 723,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "78:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 732,
              "nodeType": "Block",
              "src": "143:43:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 726,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 920,
                        "src": "157:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "157:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 728,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 722,
                      "src": "171:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "157:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 731,
                  "nodeType": "IfStatement",
                  "src": "153:26:1",
                  "trueBody": {
                    "id": 730,
                    "nodeType": "PlaceholderStatement",
                    "src": "178:1:1"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 733,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 725,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "140:2:1"
            },
            "src": "121:65:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 741,
              "nodeType": "Block",
              "src": "214:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 736,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 722,
                      "src": "224:5:1",
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
                        "id": 737,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 920,
                        "src": "232:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 738,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "232:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "224:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 740,
                  "nodeType": "ExpressionStatement",
                  "src": "224:18:1"
                }
              ]
            },
            "documentation": null,
            "id": 742,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 734,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "204:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "214:0:1"
            },
            "scope": 775,
            "src": "192:57:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 753,
              "nodeType": "Block",
              "src": "311:53:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 749,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 724,
                      "src": "321:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 750,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 744,
                      "src": "348:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "321:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 752,
                  "nodeType": "ExpressionStatement",
                  "src": "321:36:1"
                }
              ]
            },
            "documentation": null,
            "id": 754,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 747,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 746,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 733,
                  "src": "300:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "300:10:1"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 744,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 754,
                  "src": "277:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 743,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "311:0:1"
            },
            "scope": 775,
            "src": "255:109:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 773,
              "nodeType": "Block",
              "src": "426:119:1",
              "statements": [
                {
                  "assignments": [
                    762
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 762,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 774,
                      "src": "436:19:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$775",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 761,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 775,
                        "src": "436:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$775",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 766,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 764,
                        "name": "new_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 756,
                        "src": "469:11:1",
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
                      "id": 763,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 775,
                      "src": "458:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$775_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "458:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$775",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "436:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 770,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 724,
                        "src": "513:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 767,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 762,
                        "src": "491:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$775",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 754,
                      "src": "491:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "491:47:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 772,
                  "nodeType": "ExpressionStatement",
                  "src": "491:47:1"
                }
              ]
            },
            "documentation": null,
            "id": 774,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 759,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 758,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 733,
                  "src": "415:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "415:10:1"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 756,
                  "name": "new_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 774,
                  "src": "387:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 755,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "387:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "386:21:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 760,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "426:0:1"
            },
            "scope": 775,
            "src": "370:175:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 776,
        "src": "26:521:1"
      }
    ],
    "src": "0:548:1"
  },
  "legacyAST": {
    "absolutePath": "/workspace/6c/startup/medivh/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        775
      ]
    },
    "id": 776,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 720,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 775,
        "linearizedBaseContracts": [
          775
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 722,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 775,
            "src": "52:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 721,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "52:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 724,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 775,
            "src": "78:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 723,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "78:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 732,
              "nodeType": "Block",
              "src": "143:43:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 726,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 920,
                        "src": "157:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "157:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 728,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 722,
                      "src": "171:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "157:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 731,
                  "nodeType": "IfStatement",
                  "src": "153:26:1",
                  "trueBody": {
                    "id": 730,
                    "nodeType": "PlaceholderStatement",
                    "src": "178:1:1"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 733,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 725,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "140:2:1"
            },
            "src": "121:65:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 741,
              "nodeType": "Block",
              "src": "214:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 736,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 722,
                      "src": "224:5:1",
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
                        "id": 737,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 920,
                        "src": "232:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 738,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "232:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "224:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 740,
                  "nodeType": "ExpressionStatement",
                  "src": "224:18:1"
                }
              ]
            },
            "documentation": null,
            "id": 742,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 734,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "204:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "214:0:1"
            },
            "scope": 775,
            "src": "192:57:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 753,
              "nodeType": "Block",
              "src": "311:53:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 749,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 724,
                      "src": "321:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 750,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 744,
                      "src": "348:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "321:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 752,
                  "nodeType": "ExpressionStatement",
                  "src": "321:36:1"
                }
              ]
            },
            "documentation": null,
            "id": 754,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 747,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 746,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 733,
                  "src": "300:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "300:10:1"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 744,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 754,
                  "src": "277:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 743,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "311:0:1"
            },
            "scope": 775,
            "src": "255:109:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 773,
              "nodeType": "Block",
              "src": "426:119:1",
              "statements": [
                {
                  "assignments": [
                    762
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 762,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 774,
                      "src": "436:19:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$775",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 761,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 775,
                        "src": "436:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$775",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 766,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 764,
                        "name": "new_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 756,
                        "src": "469:11:1",
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
                      "id": 763,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 775,
                      "src": "458:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$775_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "458:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$775",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "436:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 770,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 724,
                        "src": "513:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 767,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 762,
                        "src": "491:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$775",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 754,
                      "src": "491:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "491:47:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 772,
                  "nodeType": "ExpressionStatement",
                  "src": "491:47:1"
                }
              ]
            },
            "documentation": null,
            "id": 774,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 759,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 758,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 733,
                  "src": "415:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "415:10:1"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 756,
                  "name": "new_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 774,
                  "src": "387:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 755,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "387:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "386:21:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 760,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "426:0:1"
            },
            "scope": 775,
            "src": "370:175:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 776,
        "src": "26:521:1"
      }
    ],
    "src": "0:548:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "331788": {
      "events": {},
      "links": {},
      "address": "0x8c589ce664c7dd3326c5da3e55ca3eac57885dab",
      "transactionHash": "0x56fd4441b5ba69a6fb586965bce5c5d9eb30ab0ff0810452ca690a8730846788"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-15T05:10:24.672Z"
}