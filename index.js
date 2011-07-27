var fs=require('fs');
var vm=require('vm');
function jsinc() 
{
 var files=arguments;
 if(arguments.length>1 && typeof arguments[arguments.length-1]=='object')
 {
  var sandbox=arguments[arguments.length-1];//the last argument is sand box
  files=Array.prototype.slice.call(arguments,0,arguments.length-1);// the other arguments are the files array
 }
 var data  = "", sandbox  = sandbox || {};   
 for(var i=0;i<files.length;i++)
 {
  var file=files[i];
  data = fs.readFileSync( file,'utf-8'); 
  if(!('console' in sandbox))  sandbox.console=console; // adds a console variable, probably a wanted future.
  if(!('window' in sandbox))   sandbox.window=sandbox; // adds window variable to sandbox, probaly required by some scripts
  vm.runInNewContext( data, sandbox, file ); 
 }
 //console.log(sandbox);
 return sandbox; 
}
jsinc.jsinc=jsinc;//backwards compatibility
module.exports=jsinc;

// to get started do like this:
//
//var jsinc   = require('jsinc');
//var date    = jsinc( 'date.js' ); 
//console.log(date); 
