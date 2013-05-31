/**
 * StartController.js
 * User: Andrew
 * Date: 1/26/13
 * Time: 11:15 AM
 **/
define(function(require){
    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        Marionette          = require('marionette'),
        vent                = require('app/vent'),
        layout              = require('text!templates/StartLayout.html'),
        InspectorStartView  = require('views/InspectorStartView'),
        PlayerStartView     = require('views/PlayerStartView'),
        LoginStartView      = require('views/LoginStartView'),
        InspectorWizardView = require('views/InspectorWizardView')

    'use strict';

    // public module API
    var Controller = {};

    _.extend(Controller, Backbone.Events);

    // private

    // private
    var _initializeLayout = function() {

        Controller.layout = new Layout();
        Controller.layout.on('show', function() {
            $('#inspectorStart').on("click",function(){ console.log("YAY"); });
            Controller.trigger('startLayout:rendered');
        });
        vent.trigger('app:show', Controller.layout);

    };


    // Listen for events /////////////////////////////////////////////////////////////////////////////////////////////
    // controller attach a sub view
    Controller.on("startLayout:rendered", function() {
        console.log('startLayout:rendered =>StartController');


        // render views for the existing HTML in the template,...
        var inspectorStartView = new InspectorStartView();
        //  and attach it to the layout (i.e. don't double render)

        console.log('InspectorStartView.events ', inspectorStartView.events);

        Controller.layout.inspectorStart.attachView(inspectorStartView);
        Controller.trigger('inspectorStart:show', inspectorStartView);

        var loginStartView = new LoginStartView();
        Controller.layout.loginStart.attachView(loginStartView);
        Controller.trigger('loginStart:show', loginStartView);

        var playerStartView = new PlayerStartView();
        Controller.layout.playerStart.attachView(playerStartView);
        Controller.trigger('playerStart:show', playerStartView);
    });

    // controller show inspector in the layout / subview
    Controller.on('inspectorStart:show', function(inspectorStartView) {
        console.log('show inspector start view');
        //console.log('InspectorVartView instance this.$el : ', inspectorStartView.el);
        Controller.layout.inspectorStart.show(inspectorStartView);
    });
    //// inspectorStart:start ///////////////////////////////////////////////////////
    Controller.on('inspectorStart:start', function() {
        console.log('start inspector wizard view');
        var inspectorWizardView = new InspectorWizardView();
        Controller.layout.show(inspectorWizardView);
    });
    // controller show login in the layout / subview
    Controller.on('loginStart:show', function(loginStartView) {
        console.log('show login start view');
        Controller.layout.loginStart.show(loginStartView);
    });

    // controller show player in the layout / subview
    Controller.on('playerStart:show', function(playerStartView) {
        console.log('show player start view');
        Controller.layout.playerStart.show(playerStartView);
    });


    // public API
    Controller.go_start = function(term) {
        _initializeLayout();
        //vent.trigger("search:term", term);
    };

    return Controller;
});