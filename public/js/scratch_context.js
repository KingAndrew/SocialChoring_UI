(function(){
//    var myWizard = $('#MyWizard').wizard();
    var items = [];

    // now loop through the steps.
//    _.each(this.steps, function populateHtmlSteps(step) {
//            console.log("Html Steps #", step.step_number);
//            if (step.step_number < 2) {
//                items.push('<li data-target="#step' + step.step_number +
//                    '" class="active"><span class="badge badge-info">'+step.step_number+'</span>' + step.title +
//                    '<span class="chevron"></span></li>');
//            } else { // all the non active ones
//                items.push('<li data-target="#step' + step.step_number +
//                    '"><span class="badge badge-info">'+step.step_number+'</span>' + step.title +
//                    '<span class="chevron"></span></li>');
//            }
//        } // end of populateHtmlSteps
//    ); // end of each(steps
    $("#MyWizard ul.steps").append("<li data-target='#step4'><span class='badge badge-info'>3</span>This id Dynamic<span class='chevron'></span></li>");
})();
<!-- User: Andrew Date: 3/20/13 Time: 8:17 AM -->
//Derick Bailey's JS context tutorial scracth pad.
//console.log("scratch_context loaded");

//function foo(){
//    var fooSelf = this;
//    var bar = "baz";
//
//    //console.log("1 this: ",this, " self: "fooSelf);
//
//    this.quux = function(){
//        console.log(bar, "this: ",this, " self: ", fooSelf);
//    }
//    this.quux()
//}
//
//obj = {
//    baz: "quux"
//};
//
////1 When calling just a function this is Window.
//foo();
//quux();

//2 if you make it an object instance this is
//objFoo = new foo();
//objFoo.quux();

// 3
//foo1 = {
//    bar: function(){
//        console.log("foo1 this: ",this);
//        var output = this.foo1.baz();
//
//        console.log("this.baz",output);
//    },
//    baz: function(){
//        console.log(this);
//       return "quux";
//
//    }
//
//}
//foo1.bar.call();
//
//var func = foo1.bar;

//func();

// 4
