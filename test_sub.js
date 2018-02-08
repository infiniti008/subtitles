var fs = require('fs');
var parser = require('subtitles-parser');

// var srt = fs.readFileSync('./work_directory/tbbts11e12_en.srt', 'utf8');

// var data = parser.fromSrt(srt);
// // console.log(data[3]);

// // console.log(Object.keys(data).includes('length'));
// var obj = data.reduce(function(acc, cur, i) {
//     acc[i] = cur;
//     return acc;
// }, {});
// obj.length = data.length;

// fs.writeFileSync('./ss.json', JSON.stringify(obj));

var ob = require('./ss.json');
// console.log(ob);
// var ar = [];
// for (const p in ob) {
//     if (p !== 'length') {
//         ar[p] = ob[p];
//     }
// }
var ar = Array.from(ob);
// console.log(ar);

fs.writeFileSync('./new_s.str', parser.toSrt(ar));