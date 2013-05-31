<!-- routes/HelpController.js -->
define(['underscore', 'marionette', 'app/vent', 'text!templates/HelpLayout.html'],
    function (_, Marionette, vent, layout) {
        'use strict';

        // public module API
        var Controller = {};

        // private
        var Layout = Marionette.Layout.extend({
            template: _.template(layout),

            regions: {
                faq: "#"
            }
        });

// private
var _initializeLayout = function () {

};


return Controller;
});