// DesktopInit.js
// --------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery"      : "libs/jquery",

      "jqueryui"    : "libs/jqueryui",

      "underscore"  : "libs/lodash",

      "backbone"    : "libs/backbone",

      "marionette"  : "libs/backbone.marionette",

      "theme"       : "libs/theme",

      // Plugins
      // -------
      "backbone.wreqr"       : "libs/plugins/backbone.wreqr",
      "backbone.babysitter"  : "libs/plugins/backbone.babysitter",

      "backbone.validateAll" : "libs/plugins/Backbone.validateAll",

      "fuelux/all"            : "libs/plugins/all",
      "text"                 : "libs/plugins/text",

      // Application Folders
      // -------------------
      "collections"         : "app/collections",
      "models"              : "app/models",
      "routers"             : "app/routers",
      "templates"           : "app/views/templates",
      "views"               : "app/views"
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // Twitter Bootstrap jQuery plugins
      "fuelux/all": {
          deps:["jquery"]
      },
      // jQueryUI
      "jqueryui": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },
      "marionette" : {
          "deps" : ["jquery", "underscore", "backbone"],
          "exports" : "Marionette"
      },

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"]
  }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
define(function(require) {
      var   $                   = require("jquery"),
            _                   = require("underscore"),
            SocialChoring       = require("app/App"),
            InspectorModel      = require("models/InspectorModel"),
            PublicRouter        = require("routers/PublicRouter"),
            PublicController    = require("routers/publicController"),// Routers with its controller
            theme               = require("theme");


      var options = {
          publicController  :   PublicController,
          publicRouter      :   PublicRouter

      }

      SocialChoring.start(options);
    }
);