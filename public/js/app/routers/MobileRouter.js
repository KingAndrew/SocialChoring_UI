// MobileRouter.js
// ---------------
define(["jquery", "marionette"],
    function($,  marionette) {
        "use strict";

        var MobileRouting  = {};

        // This is the top of the application
        // There should only be a few routs to start with
        MobileRouting.Router = marionette.AppRouter.extend({

            // All of your Backbone Routes (add more)
            appRoutes: {

                // When there is no hash on the url, the home method is called
                "": "go_start"

            }

        });

        // Returns the MobileRouting class
        return MobileRouting;

    }
);