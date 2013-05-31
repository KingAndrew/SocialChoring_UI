// views/RegistrationView.js
// -------
define(function (require) {
    var $ = require("jquery"),
        Marionette      = require("Marionette"),
        SocialChoring   = require('app/App'),
        template        = require("text!templates/yo.html")
    'use strict';

    var RegistrationView = Marionette.ItemView.extend({
        template: template,
        model: SocialChoring.Models.inspectorModel
    });

    // Returns the View class
    return RegistrationView;

});