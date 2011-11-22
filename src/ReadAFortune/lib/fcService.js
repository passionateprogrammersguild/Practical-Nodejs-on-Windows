var fs = require("fs"),
    formatFortune = function(fortune) {
        return fortune.replace(/\-\- /g, "&mdash; ").replace(/\n\t/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp; ");
    },
    parseFortunes = function(text) {
        return text.split("\r\n%\r\n");
    },    
    getRandomWithinRange = function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    readDataFromFile = function (fileName) {
        var cwd = process.cwd(),
            fileToOpen = cwd.length > fileName.length ? cwd + '\\lib\\' + fileName : fileName;
        
        return fs.readFileSync(fileToOpen, 'utf8');
    },
    fortunes = parseFortunes(readDataFromFile('fortunes.txt'));
    
exports.getNextFortune = function() {
    var randomFortuneIndex = getRandomWithinRange(0, fortunes.length - 1);
    return {
        idx: randomFortuneIndex,
        text: formatFortune(fortunes[randomFortuneIndex])
    };
}

exports.getFortuneAt = function(idx) {
    var length = fortunes.length -1,
        safeIdx = idx > length || idx < length ? 0 : idx;
        
    return {
        idx: safeIdx,
        text: formatFortune(fortunes[safeIdx])
    };
}
