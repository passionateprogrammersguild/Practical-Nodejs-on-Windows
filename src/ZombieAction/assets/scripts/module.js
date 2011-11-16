module.exports = (function () {
    return {
        CreateZombie: function (name) {
            return new Zombie(name);
        }
    };
} ());