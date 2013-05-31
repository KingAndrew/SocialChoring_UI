// views/HelpView.js
// -------
define(function (require) {
    var $           = require("jquery"),
        marionette  = require("marionette"),
        //Model       = require("models/YoModel"),
        template     = require('text!templates/HelpLayout.html')
    'use strict';

    var HelpView = marionette.ItemView.extend({
        template: template
    });

    // Returns the View class
    return HelpView;

});