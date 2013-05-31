// View.js
// -------

// This is the top of the window Chain
define(["jquery", "marionette", "models/Model", "text!templates/startDiv.html"],

    function($, marionette, Model, template){

        var View = marionette.ItemView.extend({

            model   : Model,
            template: template

        });

        // Returns the View class
        return View;

    }

);