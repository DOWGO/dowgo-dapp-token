export const DowgoERC20ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialPrice",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_targetRatio",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_collRange",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "usdcTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "AdminBuyDowgo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "AdminSellDowgo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "BuyDowgo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PriceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "SellDowgo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "USDCSupplyDecreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "USDCSupplyIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawUSDC",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WHITELISTED_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
    ],
    name: "admin_buy_dowgo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
    ],
    name: "admin_sell_dowgo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
    ],
    name: "buy_dowgo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collRange",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "decrease_usdc_supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_usdc_allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "grant_admin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "increase_usdc_supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "banishedAdmin",
        type: "address",
      },
    ],
    name: "revoke_admin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "banishedUserFromWhitelist",
        type: "address",
      },
    ],
    name: "revoke_whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dowgoAmount",
        type: "uint256",
      },
    ],
    name: "sell_dowgo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "set_current_price",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetRatio",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalUSDCSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "usdcUserBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newWhitelistedUser",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "withdraw_usdc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const whitelistedDowgoContractBytecode =
  "0x60806040523480156200001157600080fd5b5060405162004b3438038062004b3483398181016040528101906200003791906200041a565b6040518060400160405280600581526020017f446f77676f0000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f44574700000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000325565b508060049080519060200190620000d492919062000325565b50505080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360098190555082600a60006101000a81548161ffff021916908361ffff16021790555081600a60026101000a81548161ffff021916908361ffff1602179055506200018b7f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b4933620001aa60201b60201c565b620001a06000801b33620001aa60201b60201c565b5050505062000585565b620001bc8282620001c060201b60201c565b5050565b620001d28282620002b260201b60201c565b620002ae5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002536200031d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b8280546200033390620004d2565b90600052602060002090601f016020900481019282620003575760008555620003a3565b82601f106200037257805160ff1916838001178555620003a3565b82800160010185558215620003a3579182015b82811115620003a257825182559160200191906001019062000385565b5b509050620003b29190620003b6565b5090565b5b80821115620003d1576000816000905550600101620003b7565b5090565b600081519050620003e68162000537565b92915050565b600081519050620003fd8162000551565b92915050565b60008151905062000414816200056b565b92915050565b600080600080608085870312156200043157600080fd5b6000620004418782880162000403565b94505060206200045487828801620003ec565b93505060406200046787828801620003ec565b92505060606200047a87828801620003d5565b91505092959194509250565b60006200049382620004a8565b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006002820490506001821680620004eb57607f821691505b6020821081141562000502576200050162000508565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620005428162000486565b81146200054e57600080fd5b50565b6200055c816200049a565b81146200056857600080fd5b50565b6200057681620004c8565b81146200058257600080fd5b50565b61459f80620005956000396000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c80635a071cee116101305780639d1b464a116100b8578063ba080e721161007c578063ba080e72146106c3578063be83f92d146106e1578063cee60893146106fd578063d547741f1461072d578063dd62ed3e1461074957610226565b80639d1b464a1461060b578063a217fddf14610629578063a457c2d714610647578063a9059cbb14610677578063b3b8be4d146106a757610226565b806370a08231116100ff57806370a08231146105535780637a3226ec1461058357806391d14854146105a157806395d89b41146105d15780639b19251a146105ef57610226565b80635a071cee146104cb5780635a08bd17146104fb5780635a1ed9e3146105195780636617a1b41461053557610226565b8063248a9ca3116101b357806331f9bfbd1161018257806331f9bfbd1461041757806336568abe14610433578063395093511461044f5780634b59a4ed1461047f57806352e738a4146104af57610226565b8063248a9ca3146103915780632f2ff15d146103c15780633030609e146103dd578063313ce567146103f957610226565b8063095ea7b3116101fa578063095ea7b3146102c557806315ee9cc4146102f557806318160ddd1461031357806320a193071461033157806323b872dd1461036157610226565b8062d50f5d1461022b57806301ffc9a71461025b57806306fdde031461028b57806308f496dd146102a9575b600080fd5b61024560048036038101906102409190613236565b610779565b6040516102529190613795565b60405180910390f35b6102756004803603810190610270919061320d565b610aa2565b6040516102829190613795565b60405180910390f35b610293610b1c565b6040516102a091906137cb565b60405180910390f35b6102c360048036038101906102be919061308f565b610bae565b005b6102df60048036038101906102da9190613143565b610bfe565b6040516102ec9190613795565b60405180910390f35b6102fd610c21565b60405161030a9190613acd565b60405180910390f35b61031b610c35565b6040516103289190613ae8565b60405180910390f35b61034b60048036038101906103469190613236565b610c3f565b6040516103589190613795565b60405180910390f35b61037b600480360381019061037691906130f4565b610f8f565b6040516103889190613795565b60405180910390f35b6103ab60048036038101906103a691906131a8565b610fbe565b6040516103b891906137b0565b60405180910390f35b6103db60048036038101906103d691906131d1565b610fde565b005b6103f760048036038101906103f29190613236565b611007565b005b6104016110b8565b60405161040e9190613b2c565b60405180910390f35b610431600480360381019061042c9190613236565b6110c1565b005b61044d600480360381019061044891906131d1565b611404565b005b61046960048036038101906104649190613143565b611487565b6040516104769190613795565b60405180910390f35b61049960048036038101906104949190613236565b611531565b6040516104a69190613795565b60405180910390f35b6104c960048036038101906104c49190613236565b611715565b005b6104e560048036038101906104e09190613236565b611944565b6040516104f29190613795565b60405180910390f35b610503611b88565b6040516105109190613acd565b60405180910390f35b610533600480360381019061052e919061308f565b611b9c565b005b61053d611c32565b60405161054a9190613ae8565b60405180910390f35b61056d6004803603810190610568919061308f565b611c38565b60405161057a9190613ae8565b60405180910390f35b61058b611c80565b60405161059891906137b0565b60405180910390f35b6105bb60048036038101906105b691906131d1565b611ca4565b6040516105c89190613795565b60405180910390f35b6105d9611d0f565b6040516105e691906137cb565b60405180910390f35b6106096004803603810190610604919061308f565b611da1565b005b610613611de4565b6040516106209190613ae8565b60405180910390f35b610631611dea565b60405161063e91906137b0565b60405180910390f35b610661600480360381019061065c9190613143565b611df1565b60405161066e9190613795565b60405180910390f35b610691600480360381019061068c9190613143565b611edb565b60405161069e9190613795565b60405180910390f35b6106c160048036038101906106bc9190613236565b611efe565b005b6106cb612032565b6040516106d89190613ae8565b60405180910390f35b6106fb60048036038101906106f6919061308f565b6120e6565b005b6107176004803603810190610712919061308f565b61210c565b6040516107249190613ae8565b60405180910390f35b610747600480360381019061074291906131d1565b612124565b005b610763600480360381019061075e91906130b8565b61214d565b6040516107709190613ae8565b60405180910390f35b60007f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b496107ad816107a86121d4565b6121dc565b60006107de670de0b6b3a76400006107d06009548761227990919063ffffffff16565b61228f90919063ffffffff16565b9050836107ea33611c38565b101561082b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610822906138ed565b60405180910390fd5b60006108af6127106108a1600a60009054906101000a900461ffff1661ffff16610893670de0b6b3a76400006108856009546108778d610869610c35565b6122a590919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b90506108fe6108ef6127106108e1600a60029054906101000a900461ffff1661ffff168561227990919063ffffffff16565b61228f90919063ffffffff16565b826122a590919063ffffffff16565b610913836007546122a590919063ffffffff16565b11610953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094a9061396d565b60405180910390fd5b81600754101561098c577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6109a1826007546122a590919063ffffffff16565b6007819055506109f982600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122bb90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a4633866122d1565b3373ffffffffffffffffffffffffffffffffffffffff167f22617533c2f5c28ae136d0634bd3eaa5f3be6766d7c54715dd3f2df8c76bddd98684604051610a8e929190613b03565b60405180910390a260019350505050919050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610b155750610b14826124a8565b5b9050919050565b606060038054610b2b90613d79565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5790613d79565b8015610ba45780601f10610b7957610100808354040283529160200191610ba4565b820191906000526020600020905b815481529060010190602001808311610b8757829003601f168201915b5050505050905090565b6000801b610bc381610bbe6121d4565b6121dc565b610bed7f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b49836121dc565b610bfa6000801b83610fde565b5050565b600080610c096121d4565b9050610c16818585612512565b600191505092915050565b600a60029054906101000a900461ffff1681565b6000600254905090565b60007f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b49610c7381610c6e6121d4565b6121dc565b6000610ca4670de0b6b3a7640000610c966009548761227990919063ffffffff16565b61228f90919063ffffffff16565b90506000610d2a612710610d1c600a60009054906101000a900461ffff1661ffff16610d0e670de0b6b3a7640000610d00600954610cf28d610ce4610c35565b6122bb90919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b9050610d7981610d6b612710610d5d600a60029054906101000a900461ffff1661ffff168661227990919063ffffffff16565b61228f90919063ffffffff16565b6122bb90919063ffffffff16565b610d8e836007546122bb90919063ffffffff16565b10610dce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc59061394d565b60405180910390fd5b610dd6612032565b821115610e18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0f9061392d565b60405180910390fd5b610e2d826007546122bb90919063ffffffff16565b6007819055506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610e9493929190613735565b602060405180830381600087803b158015610eae57600080fd5b505af1158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee6919061317f565b905080610f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1f906139cd565b60405180910390fd5b610f3233876126dd565b3373ffffffffffffffffffffffffffffffffffffffff167fc77d275b83abd7bdf13361ba63e057ac7a33df12e414a525c33c231aaee4e3748785604051610f7a929190613b03565b60405180910390a26001945050505050919050565b600080610f9a6121d4565b9050610fa785828561283d565b610fb28585856128c9565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b610fe782610fbe565b610ff881610ff36121d4565b6121dc565b6110028383612b4a565b505050565b6000801b61101c816110176121d4565b6121dc565b6000821161105f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110569061384d565b60405180910390fd5b816009819055503373ffffffffffffffffffffffffffffffffffffffff167ff9a09e2869a1f88523f00504328d7965866201bafe501573db2e114e3375a086836040516110ac9190613ae8565b60405180910390a25050565b60006012905090565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115611143576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113a9061390d565b60405180910390fd5b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016111a091906136f1565b60206040518083038186803b1580156111b857600080fd5b505afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f0919061325f565b905080821115611229577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b61127b82600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122a590919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b815260040161131d92919061376c565b602060405180830381600087803b15801561133757600080fd5b505af115801561134b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136f919061317f565b9050806113b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a8906138ad565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f23ee1b877cb0081138b4973c5b2eca0133c573ad526550935d83aaade37666ca846040516113f79190613ae8565b60405180910390a2505050565b61140c6121d4565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147090613a6d565b60405180910390fd5b6114838282612c2b565b5050565b6000806114926121d4565b9050611526818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115219190613b6e565b612512565b600191505092915050565b60008060001b611548816115436121d4565b6121dc565b60006115b36127106115a5600a60009054906101000a900461ffff1661ffff16611597670de0b6b3a76400006115896009548b61227990919063ffffffff16565b61228f90919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b9050836115bf33611c38565b1015611600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f790613a2d565b60405180910390fd5b611615816007546122a590919063ffffffff16565b60078190555061166d81600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122bb90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506116ba33856122d1565b3373ffffffffffffffffffffffffffffffffffffffff167f8965c7ba68265bf3142f9ddd25162bdcbefe98eb33653eda4ab980ed8f9a54eb8583604051611702929190613b03565b60405180910390a2600192505050919050565b6000801b61172a816117256121d4565b6121dc565b600061179c61271061178e600a60009054906101000a900461ffff1661ffff16611780670de0b6b3a7640000611772600954611764610c35565b61227990919063ffffffff16565b61228f90919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b90506117eb6117dc6127106117ce600a60029054906101000a900461ffff1661ffff168561227990919063ffffffff16565b61228f90919063ffffffff16565b826122a590919063ffffffff16565b611800846007546122a590919063ffffffff16565b1015611841576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183890613a0d565b60405180910390fd5b611856836007546122a590919063ffffffff16565b6007819055506118ae83600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122bb90919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fe3bcf8b1d40526368cd20320e5c15c9bed5a3cc28471d2cc024b6c539721077d846040516119379190613ae8565b60405180910390a2505050565b60008060001b61195b816119566121d4565b6121dc565b60006119c66127106119b8600a60009054906101000a900461ffff1661ffff166119aa670de0b6b3a764000061199c6009548b61227990919063ffffffff16565b61228f90919063ffffffff16565b61227990919063ffffffff16565b61228f90919063ffffffff16565b90506119d0612032565b811115611a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a099061392d565b60405180910390fd5b611a27816007546122bb90919063ffffffff16565b6007819055506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401611a8e93929190613735565b602060405180830381600087803b158015611aa857600080fd5b505af1158015611abc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae0919061317f565b905080611b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b19906139cd565b60405180910390fd5b611b2c33866126dd565b3373ffffffffffffffffffffffffffffffffffffffff167faeda8e28e46424402093f51b4e86fd6f05942ceabdfee4086f6b2531dc0714348684604051611b74929190613b03565b60405180910390a260019350505050919050565b600a60009054906101000a900461ffff1681565b6000801b611bb181611bac6121d4565b6121dc565b60001515611bc26000801b84611ca4565b151514611c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bfb90613aad565b60405180910390fd5b611c2e7f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b4983612124565b5050565b60075481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b4981565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060048054611d1e90613d79565b80601f0160208091040260200160405190810160405280929190818152602001828054611d4a90613d79565b8015611d975780601f10611d6c57610100808354040283529160200191611d97565b820191906000526020600020905b815481529060010190602001808311611d7a57829003601f168201915b5050505050905090565b6000801b611db681611db16121d4565b6121dc565b611de07f8429d542926e6695b59ac6fbdcd9b37e8b1aeb757afab06ab60b1bb5878c3b4983610fde565b5050565b60095481565b6000801b81565b600080611dfc6121d4565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb990613a4d565b60405180910390fd5b611ecf8286868403612512565b60019250505092915050565b600080611ee66121d4565b9050611ef38185856128c9565b600191505092915050565b6000801b611f1381611f0e6121d4565b6121dc565b611f28826007546122bb90919063ffffffff16565b600781905550600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401611f8d93929190613735565b602060405180830381600087803b158015611fa757600080fd5b505af1158015611fbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fdf919061317f565b503373ffffffffffffffffffffffffffffffffffffffff167fffe6c8efcb6323bd10aa453874abcba031daae558a7efb396d4431666921456b836040516120269190613ae8565b60405180910390a25050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161209192919061370c565b60206040518083038186803b1580156120a957600080fd5b505afa1580156120bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120e1919061325f565b905090565b6000801b6120fb816120f66121d4565b6121dc565b6121086000801b83612124565b5050565b60086020528060005260406000206000915090505481565b61212d82610fbe565b61213e816121396121d4565b6121dc565b6121488383612c2b565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6121e68282611ca4565b6122755761220b8173ffffffffffffffffffffffffffffffffffffffff166014612d0d565b6122198360001c6020612d0d565b60405160200161222a9291906136b7565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161226c91906137cb565b60405180910390fd5b5050565b600081836122879190613bf5565b905092915050565b6000818361229d9190613bc4565b905092915050565b600081836122b39190613c4f565b905092915050565b600081836122c99190613b6e565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612341576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123389061398d565b60405180910390fd5b61234d82600083613007565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156123d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123ca9061382d565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461242a9190613c4f565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161248f9190613ae8565b60405180910390a36124a38360008461300c565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612582576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612579906139ed565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156125f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125e99061386d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516126d09190613ae8565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561274d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161274490613a8d565b60405180910390fd5b61275960008383613007565b806002600082825461276b9190613b6e565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127c09190613b6e565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516128259190613ae8565b60405180910390a36128396000838361300c565b5050565b6000612849848461214d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146128c357818110156128b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128ac9061388d565b60405180910390fd5b6128c28484848403612512565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612939576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612930906139ad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156129a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129a09061380d565b60405180910390fd5b6129b4838383613007565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612a3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a31906138cd565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612acd9190613b6e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051612b319190613ae8565b60405180910390a3612b4484848461300c565b50505050565b612b548282611ca4565b612c275760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612bcc6121d4565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b612c358282611ca4565b15612d095760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612cae6121d4565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b606060006002836002612d209190613bf5565b612d2a9190613b6e565b67ffffffffffffffff811115612d69577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612d9b5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110612df9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110612e83577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002612ec39190613bf5565b612ecd9190613b6e565b90505b6001811115612fb9577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110612f35577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110612f72577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080612fb290613d4f565b9050612ed0565b5060008414612ffd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ff4906137ed565b60405180910390fd5b8091505092915050565b505050565b505050565b600081359050613020816144f6565b92915050565b6000815190506130358161450d565b92915050565b60008135905061304a81614524565b92915050565b60008135905061305f8161453b565b92915050565b60008135905061307481614552565b92915050565b60008151905061308981614552565b92915050565b6000602082840312156130a157600080fd5b60006130af84828501613011565b91505092915050565b600080604083850312156130cb57600080fd5b60006130d985828601613011565b92505060206130ea85828601613011565b9150509250929050565b60008060006060848603121561310957600080fd5b600061311786828701613011565b935050602061312886828701613011565b925050604061313986828701613065565b9150509250925092565b6000806040838503121561315657600080fd5b600061316485828601613011565b925050602061317585828601613065565b9150509250929050565b60006020828403121561319157600080fd5b600061319f84828501613026565b91505092915050565b6000602082840312156131ba57600080fd5b60006131c88482850161303b565b91505092915050565b600080604083850312156131e457600080fd5b60006131f28582860161303b565b925050602061320385828601613011565b9150509250929050565b60006020828403121561321f57600080fd5b600061322d84828501613050565b91505092915050565b60006020828403121561324857600080fd5b600061325684828501613065565b91505092915050565b60006020828403121561327157600080fd5b600061327f8482850161307a565b91505092915050565b61329181613c83565b82525050565b6132a081613c95565b82525050565b6132af81613ca1565b82525050565b60006132c082613b47565b6132ca8185613b52565b93506132da818560208601613d1c565b6132e381613e38565b840191505092915050565b60006132f982613b47565b6133038185613b63565b9350613313818560208601613d1c565b80840191505092915050565b600061332c602083613b52565b915061333782613e49565b602082019050919050565b600061334f602383613b52565b915061335a82613e72565b604082019050919050565b6000613372602283613b52565b915061337d82613ec1565b604082019050919050565b6000613395601083613b52565b91506133a082613f10565b602082019050919050565b60006133b8602283613b52565b91506133c382613f39565b604082019050919050565b60006133db601d83613b52565b91506133e682613f88565b602082019050919050565b60006133fe601f83613b52565b915061340982613fb1565b602082019050919050565b6000613421602683613b52565b915061342c82613fda565b604082019050919050565b6000613444602683613b52565b915061344f82614029565b604082019050919050565b6000613467602783613b52565b915061347282614078565b604082019050919050565b600061348a602983613b52565b9150613495826140c7565b604082019050919050565b60006134ad603e83613b52565b91506134b882614116565b604082019050919050565b60006134d0604083613b52565b91506134db82614165565b604082019050919050565b60006134f3602183613b52565b91506134fe826141b4565b604082019050919050565b6000613516602583613b52565b915061352182614203565b604082019050919050565b6000613539603983613b52565b915061354482614252565b604082019050919050565b600061355c602483613b52565b9150613567826142a1565b604082019050919050565b600061357f602b83613b52565b915061358a826142f0565b604082019050919050565b60006135a2601783613b63565b91506135ad8261433f565b601782019050919050565b60006135c5602783613b52565b91506135d082614368565b604082019050919050565b60006135e8602583613b52565b91506135f3826143b7565b604082019050919050565b600061360b601183613b63565b915061361682614406565b601182019050919050565b600061362e602f83613b52565b91506136398261442f565b604082019050919050565b6000613651601f83613b52565b915061365c8261447e565b602082019050919050565b6000613674602c83613b52565b915061367f826144a7565b604082019050919050565b61369381613cd7565b82525050565b6136a281613d05565b82525050565b6136b181613d0f565b82525050565b60006136c282613595565b91506136ce82856132ee565b91506136d9826135fe565b91506136e582846132ee565b91508190509392505050565b60006020820190506137066000830184613288565b92915050565b60006040820190506137216000830185613288565b61372e6020830184613288565b9392505050565b600060608201905061374a6000830186613288565b6137576020830185613288565b6137646040830184613699565b949350505050565b60006040820190506137816000830185613288565b61378e6020830184613699565b9392505050565b60006020820190506137aa6000830184613297565b92915050565b60006020820190506137c560008301846132a6565b92915050565b600060208201905081810360008301526137e581846132b5565b905092915050565b600060208201905081810360008301526138068161331f565b9050919050565b6000602082019050818103600083015261382681613342565b9050919050565b6000602082019050818103600083015261384681613365565b9050919050565b6000602082019050818103600083015261386681613388565b9050919050565b60006020820190508181036000830152613886816133ab565b9050919050565b600060208201905081810360008301526138a6816133ce565b9050919050565b600060208201905081810360008301526138c6816133f1565b9050919050565b600060208201905081810360008301526138e681613414565b9050919050565b6000602082019050818103600083015261390681613437565b9050919050565b600060208201905081810360008301526139268161345a565b9050919050565b600060208201905081810360008301526139468161347d565b9050919050565b60006020820190508181036000830152613966816134a0565b9050919050565b60006020820190508181036000830152613986816134c3565b9050919050565b600060208201905081810360008301526139a6816134e6565b9050919050565b600060208201905081810360008301526139c681613509565b9050919050565b600060208201905081810360008301526139e68161352c565b9050919050565b60006020820190508181036000830152613a068161354f565b9050919050565b60006020820190508181036000830152613a2681613572565b9050919050565b60006020820190508181036000830152613a46816135b8565b9050919050565b60006020820190508181036000830152613a66816135db565b9050919050565b60006020820190508181036000830152613a8681613621565b9050919050565b60006020820190508181036000830152613aa681613644565b9050919050565b60006020820190508181036000830152613ac681613667565b9050919050565b6000602082019050613ae2600083018461368a565b92915050565b6000602082019050613afd6000830184613699565b92915050565b6000604082019050613b186000830185613699565b613b256020830184613699565b9392505050565b6000602082019050613b4160008301846136a8565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000613b7982613d05565b9150613b8483613d05565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613bb957613bb8613dab565b5b828201905092915050565b6000613bcf82613d05565b9150613bda83613d05565b925082613bea57613be9613dda565b5b828204905092915050565b6000613c0082613d05565b9150613c0b83613d05565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613c4457613c43613dab565b5b828202905092915050565b6000613c5a82613d05565b9150613c6583613d05565b925082821015613c7857613c77613dab565b5b828203905092915050565b6000613c8e82613ce5565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015613d3a578082015181840152602081019050613d1f565b83811115613d49576000848401525b50505050565b6000613d5a82613d05565b91506000821415613d6e57613d6d613dab565b5b600182039050919050565b60006002820490506001821680613d9157607f821691505b60208210811415613da557613da4613e09565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f5072696365206d757374206265203e3000000000000000000000000000000000600082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f4661696c656420746f207769746864726177205553444320746f207573657200600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f5573657220646f65736e2774206f776e20656e6f75676820746f6b656e73207460008201527f6f2073656c6c0000000000000000000000000000000000000000000000000000602082015250565b7f5573657220646f65736e277420686176652074686174206d756368205553444360008201527f2063726564697400000000000000000000000000000000000000000000000000602082015250565b7f506c6561736520617070726f766520746f6b656e73206265666f72652074726160008201527f6e7366657272696e670000000000000000000000000000000000000000000000602082015250565b7f436f6e747261637420616c726561647920736f6c6420616c6c20646f77676f2060008201527f746f6b656e73206265666f7265206e65787420726562616c616e63696e670000602082015250565b7f436f6e747261637420616c726561647920626f7567687420616c6c20646f776760008201527f6f20746f6b656e73206265666f7265206e65787420726562616c616e63696e67602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f4661696c656420746f207472616e7366657220555344432066726f6d2075736560008201527f7220746f20646f77676f20736d61727420636f6e747261637400000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f7420676f20756e646572206d696e20726174696f20666f7220555360008201527f4443207265736572766573000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f41646d696e20646f65736e2774206f776e20656e6f75676820746f6b656e732060008201527f746f2073656c6c00000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b7f55736572206d757374206669727374206265207265766f6b656420746865207260008201527f6f6c65206f662061646d696e0000000000000000000000000000000000000000602082015250565b6144ff81613c83565b811461450a57600080fd5b50565b61451681613c95565b811461452157600080fd5b50565b61452d81613ca1565b811461453857600080fd5b50565b61454481613cab565b811461454f57600080fd5b50565b61455b81613d05565b811461456657600080fd5b5056fea2646970667358221220546f9b98a8423e5654961b7fe20406b2246d22576baa91de741f617c5f28172764736f6c63430008040033";
