// views/PlayerStartView.js
define(["jquery", "marionette", "text!templates/PlayerStart.html"],

    function ($, marionette, template) {

        var PlayerStartView = marionette.ItemView.extend({
            template: template,

            events: {
                'click #playerStart' : 'start'
            },
            start:function (){
                this.trigger("playerStart:start")
            }
        });

        // Returns the View class
        return PlayerStartView;

    }

);