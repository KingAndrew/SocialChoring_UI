// views/PlayerFormView.js
// -------
define(function (require) {
    var $           = require("jquery"),
        marionette  = require("marionette"),
        Model       = require("models/PlayerModel"),
        template    = require("text!templates/PlayerForm.html")
    'use strict';


    var PlayerFormView = marionette.ItemView.extend({
        template: template
    });
    // Returns the View class
    return PlayerFormView;

});