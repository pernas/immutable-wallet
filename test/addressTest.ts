import { Address, address } from '../src/address';
import { expect } from 'chai';

describe('Address class', () => {

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

  describe('Equality', () => {

    it('different objects but the same address', () => {
      expect(addr1).to.equal(addr2);
    });
    it('should not be equal after a change', () => {
      expect(addr1.setLabel("blank label")).not.to.equal(addr2);
    });

  });
  describe('Immutability', () => {

    it('setLabel should not change the original address', () => {
      const newAddr = addr1.setLabel('hello new label');
      expect(newAddr.label).to.equal('hello new label');
      expect(addr1).to.equal(addr2);
    });

  });
  describe('JSON serialization', () => {

    it('fromJSON o toJSON = id', () => {
      const JSONaddr1 = JSON.stringify(addr1);
      const addr1fromJSON = Address.fromJSON(JSONaddr1);
      expect(addr1fromJSON).to.equal(addr1);
    });

  });
});
