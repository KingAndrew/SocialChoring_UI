// views/LoginStartView.js
// -------
define(["jquery", "marionette", "text!views/templates/LoginStart.html"],

    function ($, marionette, template) {

        var LoginStartView = marionette.ItemView.extend({
            template: template
        });

        // Returns the View class
        return LoginStartView;

    }

);