import { List, is, Map, Record } from "immutable";
import { Address, address } from './src/address';

////////////////////////////////////////////////////////////////////////////////

console.log("Hello world!");

const test1 = address({
  addr: "1KDEbUotSs1m4NZRoNCGMSh8xGMXHqBLRY",
  priv: "MnO/FGADT/ld8wFUWO0wIK7sDc7/gznxn2afz87EzbbCW0TonGSScL8pIXd46FfEIjIVhwTUj/93UXDig7JDjQ==",
  tag: 2,
  label: "single address",
  created_time: 1437606166956,
  created_device_name: "javascript_web",
  created_device_version: null
});

const test2 = address({
  addr: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
  priv: "MnO/FGADT/ld8wFUWO0wIK7sDc7/gznxn2afz87EzbbCW0TonGSScL8pIXd46FfEIjIVhwTUj/93UXDig7JDjQ==",
  tag: 0,
  label: "multisig address",
  created_time: 1437606166956,
  created_device_name: "javascript_web",
  created_device_version: null
});

////////////////////////////////////////////////////////////////////////////////
// example of wallet class

type LegacyWallet = Map<string, Address>;
// interface
interface WalletInterface {
  guid:                   string;
  keys:                   LegacyWallet;
}
// immutable record
const WalletRecord: {new(a:WalletInterface):WalletInterface;} = <any>Record({
  guid:                   null,
  keys:                   null
})
// factory
export function wallet(object : WalletInterface) : Wallet {
    return new Wallet(object)
}
// class definition
export class Wallet extends WalletRecord {
  constructor(w : WalletInterface) {
    super(w)
  }
}

const a = test1.address;
const b = test2.address;
const l : LegacyWallet = Map({});
const ll = l.set(a,test1);
const lll = ll.set(b,test2);
console.log(JSON.stringify(lll, null, 2));

const myWallet = wallet({
  guid: "i am a guid",
  keys: lll
});

console.log("-----------------------------------------------");
console.log(JSON.stringify(myWallet, null, 2));

// lets say i want to change the label of this address: 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
// TODO: check how to modify inside nested immutable structures.
