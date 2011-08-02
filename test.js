var jsinc=require("./index.js");

var test=jsinc('testinc.js','testinc2.js');
console.log(test);



var testerr=jsinc('testerrinc.js');
console.log("outside err test 1",testerr.errtest1());
console.log("outside err test 2",testerr.errtest2());
