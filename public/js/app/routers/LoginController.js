/**
 * Created with IntelliJ IDEA.
 * User: Andrew
 * Date: 1/26/13
 * Time: 3:18 PM
 * To change this template use File | Settings | File Templates.
 */
define(function(require) {
    var _               = require("underscore"),
        bootstrapModal  = require("bootstrap-modal"),
        Marionette      = require("marionette"),
        vent            = require("app/vent"),
        SocialChoring   = require("app/App"),
        layout          = require('text!templates/LoginLayout.html'),
        LoginView       = require('views/LoginView')
            'use strict';

            // public module API
            var Controller = {};

            // private
            var Layout = Marionette.Layout.extend({
                template: _.template(layout),

                regions: {
                    "login": "#modal"
                }
            });

            // private
            var _initializeLayout = function() {
                console.log('initialize Login Layout...');

                Controller.layout =     new Layout();
                Controller.layout.on("show", function() {
                    console.log('initialize modal...');
                    var $modalEl = $("#modal");

                    $modalEl.html(Controller.layout.el);
                    $modalEl.modal();
                    //$("#modal").modal({show:false});
                    // render views for the existing HTML in the template, and attach it to the layout (i.e. don't double render)
                    // var loginView = new LoginView();
                    //Controller.layout.login.attachView(loginView);
                    //vent.trigger('app.show.modal', loginView);

                    vent.trigger("loginLayout:rendered");
                });
                vent.trigger('app:show:content', Controller.layout);
            };

            // controller attach a sub view
            vent.on("loginLayout:rendered", function() {
                console.log('loginLayout:rendered =>LoginController');


            });
            // public API
            Controller.go_login = function() {
                _initializeLayout();
            };
            Controller.go_logout = function() {
                _initializeLayout();
            };

            return Controller
    }
);