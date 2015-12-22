import {Record} from 'immutable';

// interface
export interface AddressInterface {
  addr:                   string;
  priv:                   string;
  tag:                    number;
  label:                  string;
  created_time:           number;
  created_device_name:    string;
  created_device_version: string;
}

// immutable record
export const AddressRecord: {new(a:AddressInterface):AddressInterface;} = <any>Record({
  addr:                   null,
  priv:                   null,
  tag:                    null,
  label:                  null,
  created_time:           null,
  created_device_name:    null,
  created_device_version: null
})

// factory
export function address(object : AddressInterface) : Address {
    return new Address(object)
}

// class definition
export class Address extends AddressRecord {
  constructor(a : AddressInterface) {
    super(a)
  }
  toJSON() {
    return {
      addr                   : this.addr,
      priv                   : this.priv,
      tag                    : this.tag,
      label                  : this.label,
      created_time           : this.created_time,
      created_device_name    : this.created_device_name,
      created_device_version : this.created_device_version
    }
  }
  // setLabel(label : string) : Address {
  //   return Record.prototype.set.call(this, "label",label)
  // }
  // set (a:string,b) : Address {
  //   return Record.prototype.set.call(this, a, b);
  // }
  get address () : string {
    return this.addr
  }
  get isWatchOnly () : boolean {
    return this.priv == null
  }
  get archived () : boolean {
    return this.tag === 2;
  }
  get active () : boolean {
    return this.tag === 0;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static methods
  static fromJSON(json):Address {
    return new Address(JSON.parse(json));
  }
  static label(a : Address, newLabel : string) : Address {
    return Record.prototype.set.call(a, "label", newLabel);
  }
  static archive (a : Address) : Address {
    return Record.prototype.set.call(a, "tag", 2);
  }
  static unArchive (a : Address) : Address {
    return Record.prototype.set.call(a, "tag", 0);
  }
  static encrypt (a : Address, p: string) : Address {
    return Record.prototype.set.call(a, "priv", "Encrypted with " + p);
  }
  static decrypt (a : Address, p: string) : Address {
    return Record.prototype.set.call(a, "priv", "Decrypted with " + p);
  }
  static new () : Address {
    // generate new address here
    return address({
      addr: "1KDEbUotSs1m4NZRoNCGMSh8xGMXHqBLRY",
      priv: "MnO/FGADT/ld8wFUWO0wIK7sDc7/gznxn2afz87EzbbCW0TonGSScL8pIXd46FfEIjIVhwTUj/93UXDig7JDjQ==",
      tag: 2,
      label: "single address",
      created_time: 1437606166956,
      created_device_name: "javascript_web",
      created_device_version: "4.0"
    });
  }
}
