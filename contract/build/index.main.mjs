// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Object({
    });
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Object({
    });
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Object({
    });
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v49, time: v48, didSend: v22, from: v47 } = txn1;
      
      ;
      const v50 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v49, time: v48, didSend: v22, from: v47 } = txn1;
  ;
  const v50 = await ctc.getContractAddress();
  stdlib.protect(ctc0, await interact.ctcAddress(v50), {
    at: './index.rsh:30:24:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:12:function exp)'],
    msg: 'ctcAddress',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Object({
    });
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v49, time: v48, didSend: v22, from: v47 } = txn1;
  ;
  const v55 = stdlib.protect(ctc4, await interact.Mint(), {
    at: './index.rsh:37:44:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:12:function exp)'],
    msg: 'Mint',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v55],
    evt_cnt: 1,
    funcNum: 1,
    lct: v48,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQDbKGRJIls1AYEIWzUCMRkjEkEACDEAKSlmQgCpNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAJSMSRCM0ARJENARJIhJMNAISEURJNQU1/4AE0dpwezT/ULBCAClIgaCNBogAjiI0ARJENARJIhJMNAISEUSABF8Nq/qwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIzE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_nftId",
                    "type": "address"
                  }
                ],
                "internalType": "struct T4",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_nftId",
                    "type": "address"
                  }
                ],
                "internalType": "struct T4",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161083c38038061083c8339810160408190526100229161017d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100bb565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b39260029201906100e4565b505050610220565b816100e05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f0906101e5565b90600052602060002090601f0160209004810192826101125760008555610158565b82601f1061012b57805160ff1916838001178555610158565b82800160010185558215610158579182015b8281111561015857825182559160200191906001019061013d565b50610164929150610168565b5090565b5b808211156101645760008155600101610169565b60006040828403121561018f57600080fd5b604080519081016001600160401b03811182821017156101bf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101d957600080fd5b60208201529392505050565b600181811c908216806101f957607f821691505b6020821081141561021a57634e487b7160e01b600052602260045260246000fd5b50919050565b61060d8061022f6000396000f3fe60806040526004361061004b5760003560e01c80630c7d29ce146100545780631e93b0f1146100675780633bc5b7bf1461008b57806383230757146100b8578063ab53f2c6146100cd57005b3661005257005b005b61005261006236600461043a565b6100f0565b34801561007357600080fd5b506003545b6040519081526020015b60405180910390f35b34801561009757600080fd5b506100ab6100a6366004610467565b61021e565b60405161008291906104a1565b3480156100c457600080fd5b50600154610078565b3480156100d957600080fd5b506100e261024a565b6040516100829291906104e8565b61010060016000541460096102e7565b61011a8135158061011357506001548235145b600a6102e7565b60008080556002805461012c90610545565b80601f016020809104026020016040519081016040528092919081815260200182805461015890610545565b80156101a55780601f1061017a576101008083540402835291602001916101a5565b820191906000526020600020905b81548152906001019060200180831161018857829003601f168201915b50505050508060200190518101906101bd919061057a565b90507fe810f068d70cceab18f867fc4833160bf160557961246b83208300aebca7e10733836040516101f092919061059c565b60405180910390a1610204341560086102e7565b6000808055600181905561021a906002906103e4565b5050565b60408051606081018252600080825260208201819052918101919091526102448261030c565b92915050565b60006060600054600280805461025f90610545565b80601f016020809104026020016040519081016040528092919081815260200182805461028b90610545565b80156102d85780601f106102ad576101008083540402835291602001916102d8565b820191906000526020600020905b8154815290600101906020018083116102bb57829003601f168201915b50505050509050915091509091565b8161021a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156103585761035861048b565b14156103d5576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156103995761039961048b565b60018111156103aa576103aa61048b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b5080546103f090610545565b6000825580601f10610400575050565b601f01602090049060005260206000209081019061041e9190610421565b50565b5b808211156104365760008155600101610422565b5090565b60006040828403121561044c57600080fd5b50919050565b6001600160a01b038116811461041e57600080fd5b60006020828403121561047957600080fd5b813561048481610452565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106104c657634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b8181101561051c57858101830151858201606001528201610500565b8181111561052e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061055957607f821691505b6020821081141561044c57634e487b7160e01b600052602260045260246000fd5b60006020828403121561058c57600080fd5b8151801515811461048457600080fd5b6001600160a01b03838116825282356020808401919091526060830191908401356105c681610452565b81811660408501525050939250505056fea2646970667358221220b040986afa66a3d2e14db018454e4612d3067e7d07b87779fa9b730c6608822b64736f6c634300080c0033`,
  BytecodeLen: 2108,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
