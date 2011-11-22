function Randomizer() {
    this.getRandomWithinRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

function FortuneCookie() {
}

FortuneCookie.prototype.load = function (textToLoad) {
    var formatFortune = function (fortune) {
        return fortune.replace(/\-\- /g, "&mdash; ").replace(/\n\t/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp; ");
    },
    _fortunes = textToLoad.split("\r\n%\r\n"),
    rdm = new Randomizer();

    this.getRandomFortune = function () {
        var randomFortuneIndex = rdm.getRandomWithinRange(0, _fortunes.length - 1);
        return formatFortune(_fortunes[randomFortuneIndex]);
    };
};