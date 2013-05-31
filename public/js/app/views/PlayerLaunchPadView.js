// views/PlayerLaunchPadView.js
// -------
define(["jquery", "marionette", "text!templates/PlayerLaunchPadLayout.html"],

    function ($, marionette, template) {

        var PlayerLaunchPadView = marionette.ItemView.extend({
            template: template
        });

        // Returns the View class
        return PlayerLaunchPadView;

    }

);