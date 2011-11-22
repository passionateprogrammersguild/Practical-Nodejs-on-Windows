var fc = require('../lib/fcService');

describe("fortune cookie test suite", function () {
    describe("when getting the next fortune", function () {
        var fortune = fc.getNextFortune();
        it("should get a random fortune", function () {
            expect(fortune).toBeDefined(0);
        });
    });
    describe("when getting a fortune at an invalid index", function () {
        var fortune = fc.getFortuneAt(1000000000000000);

        it("should get the item at index 0", function () {
            expect(fortune.idx).toEqual(0);
        });
    });
});