// to get started do like this:
//
//var jsinc   = require('jsinc');
//var date    = jsinc( 'date.js' );
//console.log(date);

var fs=require('fs');
var vm=require('vm');

function jsinc()
{
 var callback=false;

 // this is written 3 time to accept last arguments in any order: (object,function) or (function,object)
 
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
 var sandbox  = sandbox || {};
 var called_done=0;
 for(var i=0;i<files.length;i++)
 {
  var file=files[i];
  if(callback) // do this async
  {
   fs.readFile( file,'utf-8',function(err,data)
   {
    if(!err)
    {
     if(!('console' in sandbox))  sandbox.console=console; // adds a console variable, probably a wanted future.
     if(!('jsinc' in sandbox))  sandbox.jsinc=getbind(sandbox);
     vm.runInNewContext( 'this.__defineGetter__(\'window\',function(){return this;});'+data, sandbox, file );
    }
    else
    {
     console.log(err.stack)
    }
    called_done++;
    if(files.length==called_done)callback(sandbox);
   });
   
  }
  else
  {
   var data = 'this.__defineGetter__(\'window\',function(){return this;});' + fs.readFileSync( file,'utf-8');
   if(!('console' in sandbox))  sandbox.console=console; // adds a console variable, probably a wanted future.
   if(!('jsinc' in sandbox))  sandbox.jsinc=getbind(sandbox);
   vm.runInNewContext( data, sandbox, file );
  }
  
 }
 //console.log(sandbox);
 return sandbox;
}
module.exports=jsinc;
jsinc.jsinc=jsinc;//backwards compatibility


//additional staff:

function getbind(that)
{
 if(!that)that={};
 var fn=function()
 {
  if(arguments.length>2 && typeof arguments[arguments.length-1]!='object' &&  typeof arguments[arguments.length-2]!='object' )
   Array.push.call(arguments,that);
  else if(arguments.length>1 && typeof arguments[arguments.length-1]!='object')
   Array.push.call(arguments,that);
  jsinc.call(this,arguments);
 }
 //add the extentions to the bound function to look like the original function
 fn.jsinc=jsinc;//backwards compatibility
 fn.getbind=getbind;
 fn.async=jsinc;
 return fn;
}

jsinc.getbind=getbind;
jsinc.async=jsinc;
