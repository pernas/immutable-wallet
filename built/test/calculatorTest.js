var index_1 = require('../index');
var chai_1 = require('chai');
describe('Calculator', function () {
    it('should add two numbers', function () {
        var calc = new index_1.default();
        chai_1.expect(calc.add(5, 3)).to.equal(8);
    });
});
