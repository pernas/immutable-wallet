import { List } from "immutable";

export default class Calculator {
    add(x : number, y : number) : number {
        return x + y;
    }
};

export function llistaEnters(xs:Array<number>):List<number>{
  return List(xs);
};
