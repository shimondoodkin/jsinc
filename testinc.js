if(!('Array' in window)) console.log('no Array');
if(!('ArrayBuffer' in window)) console.log('no ArrayBuffer');
if(!('Boolean' in window)) console.log('no Boolean');
if(!('Date' in window)) console.log('no Date');
if(!('decodeURI' in window)) console.log('no decodeURI');
if(!('decodeURIComponent' in window)) console.log('no decodeURIComponent');
if(!('encodeURI' in window)) console.log('no encodeURI');
if(!('encodeURIComponent' in window)) console.log('no encodeURIComponent');
if(!('Error' in window)) console.log('no Error');
if(!('eval' in window)) console.log('no eval');
if(!('EvalError' in window)) console.log('no EvalError');
if(!('Float32Array' in window)) console.log('no Float32Array');
if(!('Float64Array' in window)) console.log('no Float64Array');
if(!('Function' in window)) console.log('no Function');
if(!('Infinity' in window)) console.log('no Infinity');
if(!('Int16Array' in window)) console.log('no Int16Array');
if(!('Int32Array' in window)) console.log('no Int32Array');
if(!('Int8Array' in window)) console.log('no Int8Array');
if(!('isFinite' in window)) console.log('no isFinite');
if(!('isNaN' in window)) console.log('no isNaN');
if(!('Iterator' in window)) console.log('no Iterator');
if(!('Math' in window)) console.log('no Math');
if(!('Namespace' in window)) console.log('no Namespace');
if(!('NaN' in window)) console.log('no NaN');
if(!('Number' in window)) console.log('no Number');
if(!('Object' in window)) console.log('no Object');
if(!('parseFloat' in window)) console.log('no parseFloat');
if(!('parseInt' in window)) console.log('no parseInt');
if(!('QName' in window)) console.log('no QName');
if(!('RangeError' in window)) console.log('no RangeError');
if(!('ReferenceError' in window)) console.log('no ReferenceError');
if(!('RegExp' in window)) console.log('no RegExp');
if(!('StopIteration' in window)) console.log('no StopIteration');
if(!('String' in window)) console.log('no String');
if(!('SyntaxError' in window)) console.log('no SyntaxError');
if(!('TypeError' in window)) console.log('no TypeError');
if(!('Uint16Array' in window)) console.log('no Uint16Array');
if(!('Uint32Array' in window)) console.log('no Uint32Array');
if(!('Uint8Array' in window)) console.log('no Uint8Array');
if(!('Uint8ClampedArray' in window)) console.log('no Uint8ClampedArray');
if(!('undefined' in window)) console.log('no undefined');
if(!('uneval' in window)) console.log('no uneval');
if(!('URIError' in window)) console.log('no URIError');
if(!('XML' in window)) console.log('no XML');
if(!('XMLList' in window)) console.log('no XMLList');

window.foo='setting a variable to the window is the same as setting a variable to this';
console.log(foo);
console.log(window.foo);
