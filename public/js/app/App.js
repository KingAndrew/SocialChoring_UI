  // App.js
define(function(require){
        var $               = require("jquery"),
            _               = require("underscore"),
            Backbone        = require("backbone"),
            Marionette      = require("marionette"),
            HomeView        = require("views/HomeView")

    'use strict';

    console.log("Loading app...");
    var SocialChoring = new Marionette.Application();


    // this initializer does most of the heavy lifting.
    // it is run once the start method is called.
    SocialChoring.addInitializer(function(options) {

        // configure for loading templates stored externally...
        Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
            // Marionette expects "templateId" to be the ID of a DOM element.
            // But with RequireJS, templateId is actually the full text of the template.
            var template = templateId;

            // Make sure we have a template before trying to compile it
            if (!template || template.length === 0) {
                var msg = "Could not find template: '" + templateId + "'";
                var err = new Error(msg);
                err.name = "NoTemplateError";
                throw err;
            }

            return template;
        };
        console.log("initilizing app")

        SocialChoring.Routers = {};

        // Connect controllers to its router via options
        // init router's router/controller
        SocialChoring.Routers.publicRouter = new options.publicRouter.Router({
            controller: options.publicController
        })
//        new options.memberRouter.Router({
//            controller: options.memberController
//        });


        // these regions correspond to #ID's in the index.html
        SocialChoring.addRegions({
            header  : "#top_level_header",
            menu    : "#menu",
            content : "#center_court",
            footer  : "#footer",
            modal   : "#modal"

        })

    });

    // marionette app events...
    SocialChoring.on("initialize:after", function() {
        //console.log('SocialChoring is initialized  - Starting history');
        Backbone.history.start();
    });

    // show an app view: both app and 'secondapp' trigger this
    SocialChoring.vent.on('app:show:content', function(view) {
        console.log('app:show:content = ', view);
        SocialChoring.content.show(view);
    });
    // app modal inter app/module communications
    SocialChoring.vent.on('app:show:modal', function(view) {
        console.log('app:show:modal =>app');
        SocialChoring.modal.show(view);
    });




    // export the app
    return SocialChoring;
});