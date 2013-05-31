/**
 * PubliController.js
 * User: Andrew
 * Date: 1/26/13
 * Time: 11:15 AM
 **/
define(function(require){
    var $                   = require('jquery'),
        _                   = require('underscore'),
        Marionette          = require('marionette'),
        layout              = require('text!templates/StartLayout.html'),
        SocialChoring       = require('app/App'),
        HomeView            = require('views/HomeView'),
        HelpView            = require('views/HelpView'),
        WizardView          = require('views/WizardView'),
        StartView           = require('views/StartView'),
        InspectorStartView  = require('views/InspectorStartView'),
        PlayerStartView     = require('views/PlayerStartView'),
        LoginStartView      = require('views/LoginStartView'),
        LoginView           = require('views/LoginView'),
        InspectorModel      = require('models/InspectorModel')

    'use strict';

    // public module API
    var PublicController = function (options) {
        // private


        var _initializeViews = function () {
            console.log("_initializeViews this: ", this);
            // Create  each of the views that this controller handles
            SocialChoring.Views = {};
            console.log('initialize Public Controller Views...');

            SocialChoring.Views.homeView = new HomeView();
            SocialChoring.Views.helpView = new HelpView();
            SocialChoring.Views.loginView = new LoginView();
            SocialChoring.Views.loginStartView = new LoginStartView();
            SocialChoring.Views.inspectorStartView = new InspectorStartView();
            SocialChoring.Views.playerStartView = new PlayerStartView();
            SocialChoring.Views.registrationView = new WizardView();
            SocialChoring.Views.startView = new StartView();

        };
        var _initializeModels = function () {
            SocialChoring.Models = {};
            console.log('initialize Public Controller Models...');
            SocialChoring.Models.inspectorModel = new InspectorModel();
        };

        var _initializeCollections = function () {
            SocialChoring.Collections = {};
            console.log('initialize Public Controller Collections...');
        };


//            this.on('newInspector:complete', function(inspector){
//                var newPlayers = that.addPlayers(inspector);
//                newPlayers.on('newPlayers:save', function(inspector){
//                    inspector.save();
//                });
//            });
//
//            ;

//            this.trigger("inspector:registered", newInspector);


        _initializeModels();
        _initializeViews();


        // registration workflow
        //
        // this.on("newRegistration", )
        return {
            // Controller public API

            region: SocialChoring.content,

            go_help: function () {
                console.log('initialize Help View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.helpView);
                SocialChoring.vent.trigger("help:rendered");
                //vent.trigger('app:show:content', Controller.layout);
            },
            // Home public API
            go_home: function () {
                console.log('initialize Inspector Start View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.homeView);
                SocialChoring.vent.trigger("home:rendered");
            },
            // Login public API
            go_login: function () {
                console.log('initialize Login View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.loginView);
                SocialChoring.vent.trigger("login:rendered");
            },
            go_logout: function () {
                console.log('initialize Logout View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.loginView);
                SocialChoring.vent.trigger("login:rendered");
            },

            // Inspector public API
            go_inspectorStart: function () {
                console.log('initialize Inspector Start View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.inspectorStartView);
                SocialChoring.vent.trigger("inspectorStart:rendered");
            },
            // Player public API
            go_playerStart: function () {
                console.log('initialize Player Start View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.playerStartView);
                SocialChoring.vent.trigger("playerStart:rendered");
            },
            // Start public API
            go_start: function () {
                console.log('initialize Start View...');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.startView);

            },
            // Start public API
            go_join: function () {
                console.log('initialize Registration View... ');
                SocialChoring.vent.trigger('app:show:content', SocialChoring.Views.registrationView);

            },
            // Register Inspector API
            registerInspector: function (first_name, last_name, email_address, email_confirm, password, password_confirm, players) {
                console.log('register Inspector...');
                var that = this;

                //
                var newInspector = {first_name: first_name,
                    last_name: last_name,
                    email: email_address,
                    confirm_email: email_confirm,
                    password: password,
                    confirm_password: password_confirm,
                    players: players};
                n

                this.trigger("newRegistration", newInspector);
            }

        };
    };





    var aPublicController = new PublicController();

    return aPublicController;
});