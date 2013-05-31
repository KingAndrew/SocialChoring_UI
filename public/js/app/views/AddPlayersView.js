// views/AddPlayersView.js
// -------
define(function (require) {
    var $ = require("jquery"),
        marionette = require("marionette"),
        Model = require("models/PlayerModel"),
        template = require("text!templates/AddPlayersForm.html")
    'use strict';

    var AddPlayersView = marionette.ItemView.extend({
        template: template
    });

    // Returns the View class
    return AddPlayersView;

});