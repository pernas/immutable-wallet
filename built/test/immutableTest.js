var chai_1 = require('chai');
var immutable_1 = require('immutable');
describe('immutability', function () {
    describe('A number', function () {
        function increment(currentState) {
            return currentState + 1;
        }
        it('is immutable', function () {
            var state = 42;
            var nextState = increment(state);
            chai_1.expect(nextState).to.equal(43);
            chai_1.expect(state).to.equal(42);
        });
    });
    describe('A List', function () {
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }
        it('is immutable', function () {
            var state = immutable_1.List.of('Trainspotting', '28 Days Later');
            var nextState = addMovie(state, 'Sunshine');
            chai_1.expect(nextState).to.equal(immutable_1.List.of('Trainspotting', '28 Days Later', 'Sunshine'));
            chai_1.expect(state).to.equal(immutable_1.List.of('Trainspotting', '28 Days Later'));
        });
    });
});
