﻿var name = 'Michael',
    zombie = {};

beforeEach(function () {
    zombie = new Zombie(name);
});

describe("zombie test suite", function () {
    
    it("should say I want to eat your brains", function () {
        expect(zombie.sayHello()).toBe(name + 'wants to eat your brains');
    });
});