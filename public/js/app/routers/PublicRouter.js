// DesktopRouter.js
// ----------------
define(["jquery",  "marionette"],
    function($,  marionette) {
        "use strict";

        var DesktopRouting  = {};

        // This is the top of the application
        // There should only be a few routs to start with
        DesktopRouting.Router = marionette.AppRouter.extend({

            // All of your Backbone Routes (add more)
            appRoutes: {
                
                // When there is no hash on the url, the home method is called
                ""                  : "go_home",
                "home"              : "go_home",

                "start"             : "go_start",

                "join"              : "go_join",

                "inspector/start"   : "go_inspectorStart",
//                "inspector"         : "go_inspector_control_center",

//                "player"            : "go_launch_pad",
                "player/start"      : "go_playerStart",

                "login"             : "go_login",
                "logout"            : "go_logout",

                "help"              : "go_help"

            }
    
        });

        // Returns the DesktopRouting class
        return DesktopRouting;

    }

);