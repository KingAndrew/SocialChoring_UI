/**
 * Created with IntelliJ IDEA.
 * User: Andrew
 * Date: 1/26/13
 * Time: 3:18 PM
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
        var _                   = require('underscore'),
            Marionette          = require('marionette'),
            vent                = require('app/vent'),
            layout              = require('text!templates/InspectorControlCenter.html'),
            InspectorStartView  = require('views/InspectorStartView'),
            PlayerStartView     = require('views/PlayerStartView')
        'use strict';

        // public module API
        var Controller = {};

        // private
        var Layout = Marionette.Layout.extend({
            template: _.template(layout),

            regions: {
                inspectorControlCenter: "#inspector_control_center"
            }
        });

        // private
        var _initializeLayout = function() {
            console.log('initialize InspectorControlCenter Layout...');
            Controller.layout = new Layout();
            Controller.layout.on("show", function() {
                vent.trigger("inspectorLayout:rendered");
            });
            //vent.trigger('app:show:content', Controller.layout);
        };

        // controller attach a sub view/ search View
        vent.on("inspectorLayout:rendered", function() {
            console.log('inspectorLayout:rendered =>InspectorController');

            // render views for the existing HTML in the template, and attach it to the layout (i.e. don't double render)
//            var inspectorStartView = new InspectorStartView();
//            Controller.layout.inspectorStart.attachView(inspectorStartView);
//
//            var playerStartView = new PlayerStartView();
//            Controller.layout.playerStart.attachView(playerStartView);
        });

        // controller show inspector in the layout / subview
//        vent.on('show:inspectorStart', function(inspectorStartView) {
//            // console.log('show books event');
//            Controller.layout.inspectorStart.show(inspectorStartView);
//        });

        // controller show inspector in the layout / subview
//        vent.on('show:playerStart', function(playerStartView) {
//            // console.log('show books event');
//            Controller.layout.inspectorStart.show(playerStartView);
//        });


        // public API
        Controller.start_inspector = function(term) {
            _initializeLayout();
            //vent.trigger("search:term", term);
        };
        Controller.go_inspector_control_center = function(term) {
            _initializeLayout();
            //vent.trigger("search:term", term);
        };

        return Controller;

    });