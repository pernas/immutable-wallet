var immutable_1 = require("immutable");
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    return Calculator;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Calculator;
;
function llistaEnters(xs) {
    return immutable_1.List(xs);
}
exports.llistaEnters = llistaEnters;
;
