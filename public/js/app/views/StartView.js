// views/StartView.js
// -------
define(function (require) {
    var $ = require("jquery"),
        Marionette           = require("marionette"),
        SocialChoring        = require('app/App'),
        StartLayout          = require("text!templates/StartLayout.html")

    'use strict';

    var StartView = Marionette.Layout.extend({

            template: _.template(StartLayout),

            regions: {
                inspectorStart: "#inspector_start",
                loginStart:     "#login_start",
                playerStart:    "#player_start"
            },
            onShow: function (){
                console.log('onShow StartView...');
                //onShow is called by the objects rendering
                this.inspectorStart.show(SocialChoring.Views.inspectorStartView);
                this.loginStart.show(SocialChoring.Views.loginStartView);
                this.playerStart.show(SocialChoring.Views.playerStartView);

                SocialChoring.trigger('startLayout:rendered');
            }
    });

    // Returns the View class
    return StartView;

});