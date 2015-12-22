import {Record, Map, List, fromJS} from 'immutable';
import { Address, address } from './address';

type LegacyWallet = Map<string, Address>;
// interface
interface WalletInterface {
  guid                  : string;
  sharedKey             : string;
  double_encryption     : boolean;
  dpasswordhash         : string;
  keys                  : LegacyWallet;
  pbkdf2_iterations     : number;
  fee_per_kb            : number;
  html5_notifications   : boolean;
  logout_time           : number;
}
// immutable record
const WalletRecord: {new(a:WalletInterface):WalletInterface;} = <any>Record({
  guid                  : null,
  sharedKey             : null,
  double_encryption     : null,
  dpasswordhash         : null,
  pbkdf2_iterations     : null,
  fee_per_kb            : null,
  html5_notifications   : null,
  logout_time           : null,
  keys                  : null

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
  toJSON() {
    return {
      guid              : this.guid,
      sharedKey         : this.sharedKey,
      double_encryption : this.double_encryption,
      dpasswordhash     : this.dpasswordhash,
      options           : {
        pbkdf2_iterations        : this.pbkdf2_iterations,
        fee_per_kb               : this.fee_per_kb,
        html5_notifications      : this.html5_notifications,
        logout_time              : this.logout_time
      },
      // address_book      : addressBookToJSON(this._address_book),
      // tx_notes          : this._tx_notes,
      // tx_tags           : this._tx_tags,
      // tx_names          : this._tx_names,
      keys              : this.keys.toList()
      // paidTo            : this._paidTo,
      // hd_wallets        : Helpers.isEmptyArray(this._hd_wallets) ? undefined : this._hd_wallets
    };
  }
  static fromJSON(json):Wallet {
    const payload = JSON.parse(json);
    const makeLegacy = (keys) => fromJS(keys).reduce((result, item) => result.set(item.get('addr'), address(item)), Map());
    return wallet({
      guid                  : payload.guid,
      sharedKey             : payload.sharedKey,
      double_encryption     : payload.double_encryption,
      dpasswordhash         : payload.dpasswordhash,
      pbkdf2_iterations     : payload.options.pbkdf2_iterations,
      fee_per_kb            : payload.options.fee_per_kb,
      html5_notifications   : payload.options.html5_notifications,
      logout_time           : payload.options.logout_time,
      keys                  : makeLegacy(payload.keys)
    });
  }
  //////////////////////////////////////////////////////////////////////////////
  // setters
  static addAddress(w: Wallet, a : Address) : Wallet {
    return Record.prototype.setIn.call(w, ['keys',a.addr], a);
  }
  addAddress(a : Address) : Wallet {
    return Wallet.addAddress(this, a);
  }
  static setFeePerKb(w: Wallet, feePerKb : number) : Wallet {
    return Record.prototype.setIn.call(w, ['fee_per_kb'], feePerKb);
  }
  setFeePerKb(feePerKb : number) : Wallet {
    return Wallet.setFeePerKb(this, feePerKb);
  }
  static setLogoutTime(w: Wallet, logoutTime : number) : Wallet {
    return Record.prototype.setIn.call(w, ['logout_time'], logoutTime);
  }
  setLogoutTime(logoutTime : number) : Wallet {
    return Wallet.setLogoutTime(this, logoutTime);
  }
  static sethtml5Notifications(w: Wallet, html5Notifications : boolean) : Wallet {
    return Record.prototype.setIn.call(w, ['html5_notifications'], html5Notifications);
  }
  sethtml5Notifications(html5Notifications : boolean) : Wallet {
    return Wallet.sethtml5Notifications(this, html5Notifications);
  }
  //////////////////////////////////////////////////////////////////////////////
  withMutations(mutator: (mutable: Wallet) => Wallet) : Wallet {
    return Record.prototype.withMutations.call(this, mutator);
  }

}
