// views/LoginView.js
// -------
define(["jquery", "marionette", "text!templates/LoginLayout.html"],

    function ($, marionette, template) {

        var LoginView = marionette.ItemView.extend({
            template: template
        });

        // Returns the View class
        return LoginView;

    }
);