/**
 * Created with IntelliJ IDEA.
 * User: Andrew
 * Date: 1/26/13
 * Time: 3:20 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * StartController.js
 * User: Andrew
 * Date: 1/26/13
 * Time: 11:15 AM
 **/
define(['underscore', 'marionette',
        'app/vent',   'text!templates/PlayerLaunchPadLayout.html',
        'views/PlayerLaunchPadView'],
    function(_, Marionette,
             vent, layout,
             PlayerLaunchPadView) {
        'use strict';

        // public module API
        var Controller = {};

        // private
        var Layout = Marionette.Layout.extend({
            template: _.template(layout),

            regions: {
                launchPad: "#player_launch_pad"
            }
        });

        // private
        var _initializeLayout = function() {
            console.log('initialize Player Layout...');
            Controller.layout = new Layout();
            Controller.layout.on("show", function() {
                vent.trigger("playerLayout:rendered");
            });
            //vent.trigger('app:show:content', Controller.layout);
        };

        // controller attach a sub view/ search View
        vent.on("playerLayout:rendered", function() {
            console.log('playerLayout:rendered =>PlayerController');

            // render views for the existing HTML in the template, and attach it to the layout (i.e. don't double render)
            var launchPadView = new PlayerLaunchPadView();
            Controller.layout.launchPad.attachView(launchPadView);

        });

        // controller show launchPadView in the layout / subview
        vent.on('show:launchPad', function(launchPadView) {
            // console.log('show books event');
            Controller.layout.launchPad.show(launchPadView);
        });


        // public API
        Controller.start_player = function(term) {
            _initializeLayout();
            //vent.trigger("search:term", term);
        };
        Controller.go_launch_pad = function(term) {
            _initializeLayout();
            //vent.trigger("search:term", term);
        };

        return Controller;
    });