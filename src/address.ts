import {Record} from 'immutable';

// interface
interface AddressInterface {
  addr:                   string;
  priv:                   string;
  tag:                    number;
  label:                  string;
  created_time:           number;
  created_device_name:    string;
  created_device_version: string;
}

// immutable record
const AddressRecord: {new(a:AddressInterface):AddressInterface;} = <any>Record({
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
  static fromJSON(json):Address {
    return new Address(JSON.parse(json));
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
  setLabel(label : string) : Address {
    return Record.prototype.set.call(this, "label",label)
  }
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
}
