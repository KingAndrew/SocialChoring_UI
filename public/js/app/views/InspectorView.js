// views/InspectorView.js
// -------
define(function(require) {
        var _           = require('underscore'),
            $           = require("jquery"),
            marionette  = require("marionette"),
            Model       = require("models/InspectorModel"),
            template    = require("text!templates/InspectorForm.html")
        'use strict';

        var InspectorView = marionette.ItemView.extend({
            initialize:function(args){
                console.log("InspectorView initalise ")
            },
            model   : Model,
            template: template
        });

        // Returns the View class
        return InspectorView;
});