import { Seq, List, is, Map, Record, fromJS } from "immutable";
import { Address, address } from './src/address';
import { Wallet, wallet } from './src/wallet';
import { payload } from './src/payload';

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


// const a = test1.address;
// const b = test2.address;
// const l : LegacyWallet = Map({});
// const ll = l.set(a,test1);
// const lll = ll.set(b,test2);
// console.log(JSON.stringify(lll, null, 2));
//
// const myWallet = wallet({
//   guid: "i am a guid",
//   keys: lll
// });

// console.log("-----------------------------------------------");
// console.log(myWallet);
// console.log(JSON.stringify(myWallet, null, 2));
// console.log(test1.set("addr","hola"));
// console.log(test1.set("label",2))


// lets say i want to change the label of this address: 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
// TODO: check how to modify inside nested immutable structures.

// var alpha = Map({a:1, b:2, c:3, d:4});
// console.log(alpha.map((v, k) => k.toUpperCase()).join());

// var map1 = Map({a:1, b:2, c:3, d:4});
// var map2 = Map({c:10, a:20, t:30});
// var obj = {d:100, o:200, g:300};
// var map3 = map2.merge(map1);
// console.log(map3);


// const s : Seq<string, number> = Seq({a:1,b:2,c:3});
// console.log(s);
// console.log(s.map((x:number) => x*x).toObject());

// var nested = fromJS({a:{b:{c:[3,4,5]}}});
// var nested2 = nested.mergeDeep({a:{b:{d:6}}});
//
// console.log(JSON.stringify(nested, null, 2));
// console.log(JSON.stringify(nested2, null, 2));
//
// var c1 = nested.getIn(['a', 'b', 'c']);
// var c2 = nested2.getIn(['a', 'b', 'c']);
// console.log(is(c1,c2));
// console.log(c1 == c2);
// console.log(c1 === c2);
// console.log(c1)

// var seq = Map({a:1, b:1, c:1}).toSeq();
// console.log(seq.flip().map(key => key.toUpperCase()).toSeq().flip().toObject());


// var ABRecord = Record({a:1, b:2})
// var myRecord = new ABRecord({b:3})
// console.log(myRecord);
// var m = new ABRecord({c:3})
// console.log(m);


// var _RecordA = Record({
//   b: null // RecordB or null.
// });
//
// function RecordA(obj) {
//   return new _RecordA({ b: obj.b ? RecordB(obj.b) : null });
// }
//
// var _RecordB = Record({
//   a: null // RecordA or null.
// });
//
// function RecordB(obj) {
//   return new _RecordB({ a: obj.a ? RecordA(obj.a) : null });
// }
//
// var abab = RecordB({ a: { b: { a: { b: null } } } });
// console.log(abab.toString());
// console.log(abab.merge("a",10));


// var ABRecord = Record({a:1, b:2})
// var r = new ABRecord({b:3});
// var s = new ABRecord({a:1001});
// var rr = new ABRecord({a:r, b:s});
// var ss = new ABRecord({a:s, b:r});
// // var ss =
// console.log(rr);
// console.log(r);
// console.log(r.merge({a:100}));
// console.log(r.size);
// // console.log(r.set("c",100)); //error runtime
// console.log(r.set("a",101));
// console.log(r.delete("b")); //torna al estat per defecte el parametre b.
// console.log(r.clear()); //torna tot a defecte
//
// //update
// console.log(r.updateIn(['b'], x =>x+1));
// console.log(rr.setIn(['a','a'], 100000));
// console.log(r.merge(s));
// console.log(s.merge(r));
//
// console.log(rr.merge(ss));
// console.log(ss.merge(rr));
// console.log(rr.mergeDeep(ss));
// console.log(ss.mergeDeep(rr));
//
// // util per actualizar subestructura
// console.log(rr.mergeIn(['a'],s));
//
// // with mutations can be used to encrypt the wallet
// // this way you avoid making a copy foreach change
// console.log(
//   rr.withMutations(rec => {
//     rec.setIn(['a','a'], 100000)
//        .setIn(['a','b'], 200000)
//        .setIn(['b','b'], 300000);
//   })
// );

// console.log(Address.label({addr:3}, "hola"));

// const getName = (a: Address) => a.label;
//
// console.log(getName(test1));

// const w = wallet({guid: "i am guid", keys: Map({})});
// // console.log(JSON.stringify(w.addAddress(test1).addAddress(test2), null, 2));
// console.log(JSON.stringify(w.withMutations(w => w.addAddress(test1).addAddress(test2))));
// console.log(JSON.parse(payload).keys);
// console.log(JSON.stringify(Wallet.fromJSON(payload), null, 2));
const w = Wallet.fromJSON(payload);
const j = JSON.stringify(w);
const v = Wallet.fromJSON(j);
console.log(is(w,v));
console.log(w == v);
console.log(w === v);
// console.log(JSON.stringify(w.setFeePerKb(10), null, 2));

// console.log(JSON.stringify(w.keys.toList(), null, 2));
