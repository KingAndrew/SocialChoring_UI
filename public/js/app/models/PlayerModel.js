// models/PlayerModel.js
// -------
define(function (require) {
    var $ = require("jquery"),
        _ = require("underscore"),
        marionette = require("marionette"),
        Model = require("models/Model")
    'use strict';

    // Creates a new Backbone Model class object
    var PlayerModel = Model.extend({

        // Model Constructor
        initialize: function (config) {


        },

        // Default values for all of the Model attributes
        defaults: {

            id: '',
            first_name: 'FirstName',
            birth_date: '11/22/1964',
            earnings: '0.0',
            champion_count: '0',
            inspector_id: '',
            date_added: '0L',
            date_validated: '0L',
            premimum: 'true',
            version: '0'

        },

        // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
        validate: function (attrs) {

        }

    });

    // Returns the Model class
    return PlayerModel;

});

            
                