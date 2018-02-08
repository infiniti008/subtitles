var fs = require('fs');
var ob = require('./ss.json');

var str = '';

for (const p in ob) {
    if (p !== 'length') {
        str += ob[p].text;
    }
}

fs.writeFileSync('./ss.txt', str);