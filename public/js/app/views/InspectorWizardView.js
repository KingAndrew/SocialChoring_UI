// views/InspectorWizardView.js
// -------
define(function(require){
    var $               = require("jquery"),
        _               = require("underscore"),
        Marionette      = require("marionette"),
        vent            = require("app/vent"),
        Model           = require("models/InspectorModel"),
        StepOneView     = require("views/InspectorView"),
        StepTwoView     = require("views/PlayerView"),
        StepThreeView   = require("views/InspectorView"),
        Wizard          = require("views/Wizard"),
        template        = require("text!templates/WizardLayout.html")

        'use strict';

        var InspectorWizardView = Marionette.ItemView.extend({

            initialize: function() {
                _.bindAll(this, 'render', 'wizardMethod');
            },
            template: template,
            render: function() {
                this.wizardMethod();
                return this;
            },

            wizardMethod: function() {
                var myModel = new Model;
                var steps = [
                    {
                        step_number     :   1,
                        title           :   "Inspector Details",
                        instructions    :   "The Inspector is the account owner",
                        view            :   new StepOneView({ model : myModel }),
                    },
                    {
                        step_number :       2,
                        title :             "Add Players",
                        instructions :      "Instructions or description of what the user needs to do for this step",
                        view :              new StepTwoView({ model : myModel })
                    },
                    {
                        step_number :       3,
                        title :             "Add Chores",
                        instructions :      "Instructions or description of what the user needs to do for this step",
                        view :              new StepThreeView({ model : myModel })
                    }
                ];

                var view = new Wizard({
                    model : myModel,
                    steps : steps
                });
                $("#current_step").html(view.render().el);
            }

        });

        // Returns the View class
        return InspectorWizardView;

    }

);