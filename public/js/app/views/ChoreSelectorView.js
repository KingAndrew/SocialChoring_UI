// views/ChoreSelectorView.js
// -------
define(function (require) {
    var $ = require("jquery"),
        marionette = require("marionette"),
        Model = require("models/YoModel"),
        template = require("text!templates/yo.html")
    'use strict';

    var ChoreSelectorView = marionette.ItemView.extend({
        template: template
    });

    // Returns the View class
    return ChoreSelectorView;

});