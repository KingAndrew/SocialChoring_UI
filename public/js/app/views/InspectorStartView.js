// views/InspectorStartView.js
// -------
define(["underscore", "jquery", "marionette", "text!templates/InspectorStart.html"],

    function(_, $, marionette, template){

        var InspectorStartView = marionette.ItemView.extend({
            initialize:function(args){
              console.log("InspectorStartView initalise ")
            },
            template: template,

            events: {
                'click #inspectorStart' : 'start'
            },
          start:function (){
                console.log("Caught InspectorStartView click")
                this.trigger("inspectorStart:start")
          }

        });

        // Returns the View class
        return InspectorStartView;
    } // function

); // define