var fs=require('fs');
var vm=require('vm');
function jsinc()
{
 var callback=false;
 if(arguments.length>1 && typeof arguments[arguments.length-1]=='function')
 {
  var callback=arguments[arguments.length-1];//the last argument is sand box
  arguments=Array.prototype.slice.call(arguments,0,arguments.length-1);// the other arguments are the files array
 }
 if(arguments.length>1 && typeof arguments[arguments.length-1]=='object')
 {
  var sandbox=arguments[arguments.length-1];//the last argument is sand box
  arguments=Array.prototype.slice.call(arguments,0,arguments.length-1);// the other arguments are the files array
 }
 if(arguments.length>1 && typeof arguments[arguments.length-1]=='function')
 {
  var callback=arguments[arguments.length-1];//the last argument is sand box
  arguments=Array.prototype.slice.call(arguments,0,arguments.length-1);// the other arguments are the files array
 }

 var files=arguments;
 var data, sandbox  = sandbox || {};
 for(var i=0;i<files.length;i++)
 {
  var file=files[i];
  data='this.__defineGetter__(\'window\',function(){return this;});';
  if(callback) // do this async
  {
   data += fs.readFile( file,'utf-8',function(data)
   {
    if(!('console' in sandbox))  sandbox.console=console; // adds a console variable, probably a wanted future.
    if(!('jsinc' in sandbox))  sandbox.jsinc=getbind(sandbox);
    //if(!('window' in sandbox))   sandbox.window=sandbox; // adds window variable to sandbox, probaly required by some scripts// commented out because the getter above workes better
    vm.runInNewContext( data, sandbox, file );   
    callback(sandbox);
   });
  }
  else
  {
   data += fs.readFileSync( file,'utf-8');
   if(!('console' in sandbox))  sandbox.console=console; // adds a console variable, probably a wanted future.
   if(!('jsinc' in sandbox))  sandbox.jsinc=getbind(sandbox);
   //if(!('window' in sandbox))   sandbox.window=sandbox; // adds window variable to sandbox, probaly required by some scripts// commented out because the getter above workes better
   vm.runInNewContext( data, sandbox, file );
  }
  
 }
 //console.log(sandbox);
 return sandbox;
}
function getbind(that)
{
 if(!that)that={};
 return function()
 {
  if(arguments.length>2 && typeof arguments[arguments.length-1]!='object' &&  typeof arguments[arguments.length-2]!='object' )
   Array.push.call(arguments,that);
  else if(arguments.length>1 && typeof arguments[arguments.length-1]!='object')
   Array.push.call(arguments,that);
  jsinc.call(this,arguments);
 }
}
jsinc.getbind=getbind;
jsinc.jsinc=jsinc;//backwards compatibility
module.exports=jsinc;

// to get started do like this:
//
//var jsinc   = require('jsinc');
//var date    = jsinc( 'date.js' );
//console.log(date);
