// views/LogoutView.js
// -------
define(["jquery", "marionette", "text!templates/LogoutLayout.html"],

    function ($, marionette, template) {

        var LogoutView = marionette.ItemView.extend({
            template: template
        });

        // Returns the View class
        return LogoutView;

    }

);