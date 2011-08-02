function errtest1()
{
 // the window(context) reference that saved by closure to past window(context) object
 // got deleted after script exits then the window does not exists (the closered referense is incorrect)
 var s="";
 for(each in window)// each leaks outside, another sign that it works
 {
  s+=","+each;
 }
 return s;
}
console.log("inside  err test 1",errtest1());

function errtest2()
{
 var thiss=(function(){return this})();
 var s="";
 for(each in thiss) // each leaks outside, another sign that it works
 {
  s+=","+each;
 }
 return s;
}
console.log("inside  err test 2",errtest2());
