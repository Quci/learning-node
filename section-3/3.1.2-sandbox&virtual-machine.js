let vm = require('vm');

global.count1 = 100;
var count2 = 100;

let txt = `if(count1 === undefined) {
                var count1 = 0;
            }
            count1++;
            if(count2 === undefined) {
                var count2 = 0;
            }
            count2++;
            console.log(count1);
            console.log(count2);`

let script = new vm.Script(txt);
script.runInThisContext({filename: 'count.vm'});

console.log(count1);
console.log(count2);



// let sandbox = {
//     process: 'this baby',
//     require: 'that',
//     console: console
// }
//
// vm.runInNewContext('console.log(process);console.log(require)', sandbox);


