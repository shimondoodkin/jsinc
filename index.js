// example:
// download http://codeplex.com/jslinq
// var app={};
// app.jsinc            = require('inc-non-module');
// app.jslinq           = app.jsinc(__dirname+'/deps/jslinq/scripts/JSLINQ.js').window.JSLINQ;
//

//var self=this; 
//self.load_js_prefix=__dirname; 
function jsinc( file ) 
{ 
  ///if(file begins with http) download it... 
  //else 
  //if(file[0]!='/')file=self.load_js_prefix+'/'+file; //node js probably does it better. 
  var data  = require('fs').readFileSync( file), sandbox  = { 
    // all local var definations in the script are saved in sandbox; 
    //  animal: 'cat', 
    //  count: 2 //want to share anything? you can put it here 
    window:{Function:Function} // many scripts expect window to be exists 
  }; 
  process.binding( 'evals').Script.runInNewContext( data, sandbox, file ); 
  //console.log(sandbox); 
 return sandbox; 
}
this.jsinc=jsinc;

//var date=load_js( 'date.js' ); 
//console.log(date); 