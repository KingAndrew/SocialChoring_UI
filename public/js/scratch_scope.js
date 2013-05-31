<!-- User: Andrew Date: 3/20/13 Time: 8:17 AM -->
//Derick Bailey's JS scope tutorial scracth pad.
console.log("scratch_scope loaded");

var outerScope = (function(){
    var foo;
    var count = 0;
    function sayFoo(){
        console.log("first: ",foo);
        if(true){
            foo = {
                key: "value",
                bar: function(){
                    count +=1;
                    console.log("from bar")
                    return count;
                }
            };
        }
        console.log("second: ",foo);
    }
    sayFoo();
    console.log("third: ",foo);
    return foo;
}());
outerScope.bar();
console.log("forth: ", outerScope.bar());

var myModule = (function($){
    console.log($);
})(jQuery) ;