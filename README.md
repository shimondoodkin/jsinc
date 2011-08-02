jsinc - node.js module
======================

This module allows loading of javascript files that made for the browser as modules for node.js;
 
by Shimon Doodkin

license: MIT


syntax:

     Object context = jsinc( String file1, ... , String fileN, Object context, Function callback )

  * the last argument is an optional context object.
  * the function returns the resulting global object, after running the script(s)
  * basically it loades the javascript files, adds a window object, executes the script and returns to you the global object with all  of the functions and variables that ware added by the script.

example:

https://github.com/shimondoodkin/googlediff

Getting started
===============

install from npm like:
----------------------

    npm install jsinc

To get started do like this:
----------------------------

    var jsinc=require('jsinc');
    var date=jsinc( 'date.js' );
    console.log(date); // see what's there

Pinpoint the wanted functions out:
----------------------------------

    // linq example:
    // download linq from http://codeplex.com/jslinq
    var jsinc   = require('jsinc');
    var jslinq  = jsinc(__dirname+'/deps/jslinq/scripts/JSLINQ.js').window.JSLINQ; // wanted function


Advanced futures
================

Read multiple files at once:
----------------------------

    var jsinc = require('jsinc');
    var date = jsinc( 'date.js', 'date2.js' );

Custom context:
---------------

    if the last argument is an object then it is used as context.

    // if you need XMLHttpRequest for example, you can add it to the sand box like:
    // install xmlhttp like: npm install xmlhttprequest
    var date=jsinc( 'date.js',{XMLHttpRequest:require('xmlhttprequest')} );


    // you can do even staff like this (if you know what are you doing):
    var date=jsinc('date.js',this);
    // the above does a "mixin" but may have problem (nodejs bug)
    // if this module exports getters,setter, and nonenumeratable

    // read multiple files in steps by reusing the context 
    var jsinc = require('jsinc');
    var context = jsinc( 'date.js' );
        context = jsinc( 'date2.js',context );

Callback and Async file reading and loading
-------------------------------------------
var app={};
jsinc( 'date.js',{XMLHttpRequest:require('xmlhttprequest')}, function (date){ app.date=date; });
// if you add a callback function, the file will be read asynchronously.


Other Ideas:
------------

  * Use it for modules that are shared with the browser
  * Use it as a simple way to write simple modules that do not require to export the module's function
  * To bind or to rewrite the function after they loaded
  * Put a callback function in the context object and call it
  * Put jsinc in the context object, as a way for the script load other scripts, binded with the context object filled in.
  * I use this module to do quick migration of browser libs to node.js
  
