function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return 'Hi my name is ' + this.name;
};

function Zombie(name) {
    Person.call(this, name);
}

Zombie.prototype = new Person();

Zombie.prototype.sayHello = function () {
    return this.name + ' wants to eat your brains';
};