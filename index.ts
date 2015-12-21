import { List, is, Map } from "immutable";
import { Address, address } from './src/address';

export default class Calculator {
    add(x : number, y : number) : number {
        return x + y;
    }
};

////////////////////////////////////////////////////////////////////////////////

const addr1 = address({
  addr: "1KDEbUotSs1m4NZRoNCGMSh8xGMXHqBLRY",
  priv: "MnO/FGADT/ld8wFUWO0wIK7sDc7/gznxn2afz87EzbbCW0TonGSScL8pIXd46FfEIjIVhwTUj/93UXDig7JDjQ==",
  tag: 2,
  label: "my label",
  created_time: 1437606166956,
  created_device_name: "javascript_web",
  created_device_version: "4.0"
});

const addr2 = address({
  addr: "1KDEbUotSs1m4NZRoNCGMSh8xGMXHqBLRY",
  priv: "MnO/FGADT/ld8wFUWO0wIK7sDc7/gznxn2afz87EzbbCW0TonGSScL8pIXd46FfEIjIVhwTUj/93UXDig7JDjQ==",
  tag: 2,
  label: "my label",
  created_time: 1437606166956,
  created_device_name: "javascript_web",
  created_device_version: "4.0"
});

console.log("Equality: " + is(addr1,addr2));
const addrJSON = JSON.stringify(addr1, null, 2);
const JSONread  = Address.fromJSON(addrJSON);
console.log("Equality fromJSON: " + is(addr1,JSONread));
const addr3 = addr1.setLabel("I changed the LABEL");
console.log("addr1 not changed: " + addr1.label);
console.log("addr3 label: " + addr3.label);
