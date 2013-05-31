// models/Inspector.js
// --------
define(["jquery", "models/Model"],

    function($, Model) {

        // Creates a new Backbone Model class object
        var InspectorModel = Model.extend({

            // Model Constructor
            initialize: function(config) {



            },

            // Default values for all of the Model attributes
            defaults: {

                id: '',
                email: '',
                first_name: 'Hoss',
                last_name: 'Bichon',
                players: []
            },

            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return InspectorModel;

    }

);