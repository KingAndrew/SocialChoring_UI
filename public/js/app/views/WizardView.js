// views/WizardView.js.js
// -------
define(function (require) {
    var _                   = require("underscore"),
        $                   = require("jquery"),
        wizardPlugin        = require("fuelux/all"),
        Marionette          = require("marionette"),
        InspectorModel      = require("models/InspectorModel"),
        InspectorView       = require("views/InspectorView"),
        PlayerModel         = require("models/PlayerModel"),
        AddPlayersView       = require("views/AddPlayersView"),
        ChoreSelectorView   = require("views/AddPlayersView"),
        defaultWizardLayout = require("text!templates/WizardLayout.html")
    'use strict';

    var WizardView = Marionette.Layout.extend( {

        regions: {
            wizardContent: "#wiz_step_content"
        },

        ui: {
            wizardStepsUl:  "#MyWizard ul.steps"

        },
        initialize: function(options){
            this.options = options || {};
            this.template = this.options.template || defaultWizardLayout;
            this.model = this.options.model || new InspectorModel();

            // setting this.steps through the options is how we
            // code reuse if we need more than one Wizard
            this.steps = _.sortBy(
                [
                    {
                        step_number     :   1,
                        title           :   "Inspector Details",
                        instructions    :   "The Inspector is the account owner",
                        view            :   new InspectorView({template: "text!templates/Inspector.html",
                                                               id: "step1"})
                    },
                    {
                        step_number :       2,
                        title :             "Add Players",
                        instructions :      "Instructions or description of what the user needs to do for this step",
                        view :              new AddPlayersView({template: "text!templates/AddPlayersForm.html",
                                                               id: "step2"})
                    },
                    {
                        step_number :       3,
                        title :             "Add Chores",
                        instructions :      "Instructions or description of what the user needs to do for this step",
                        view :              new ChoreSelectorView({template: "text!templates/ChoreSelector.html",
                                                               id: "step3"})
                    }
                ], "step_number")

            this._initializeWizard();

        },
        onRender: function (){
            var items = [];

            // now loop through the steps.
            _.each(this.steps, function populateHtmlSteps(step) {
                    console.log("Html Steps #", step.step_number);
                    if (step.step_number < 2) {
                        items.push('<li data-target="#step' + step.step_number +
                            '" class="active"><span class="badge badge-info">'+step.step_number+'</span>' + step.title +
                            '<span class="chevron"></span></li>');
                    } else { // all the non active ones
                        items.push('<li data-target="#step' + step.step_number +
                            '"><span class="badge badge-info">'+step.step_number+'</span>' + step.title +
                            '<span class="chevron"></span></li>');
                    }
                } // end of populateHtmlSteps
            ); // end of each(steps
            $(items).appendTo(this.ui.wizardStepsUl);
            this.showStep();
        },

//        events:{
//            'stepclick': 'stepClicked',
//            'change': 'showStep',
//            "finished": 'finished'
//        },
        stepClicked:function() {
            if(this.ui.wizardStepsUl.length){
                console.log("Found '#MyWizard ul.steps'");
            }
            $('<li>' + this.ui.wizardStepsUl.size() + '</li>').appendTo(this.ui.wizardStepsUl);
        },
        // Try to get the step number
        showStep:function() {
             console.log("Step showStep");
//            this.wizardContent.show(this.steps[this.prototype.currentStep].view);

        },
        finished:function() {
            if(this.ui.wizardStepsUl.length){
                console.log("Found '#MyWizard ul.steps'");
            }
            $('<li>' + this.ui.wizardStepsUl.size() + '</li>').appendTo(this.ui.wizardStepsUl);
        },
        add:function() {
            if(this.ui.wizardStepsUl.length){
                console.log("Found '#MyWizard ul.steps'");
            }
            $('<li>' + this.ui.wizardStepsUl.size() + '</li>').appendTo(this.ui.wizardStepsUl);
        },
        remove: function() {
            $('#MyWizard ul.steps  li:last ').remove();
        },
        _initializeWizard: function(){
            var myWiz = $("MyWizard");

            // Handle all the events the wizard will have
            // onChange
            $("MyWizard").on('change', function(e, data) {
                console.log('change');
                this.showStep();
                if(data.step===3 && data.direction==='next') {
                    // return e.preventDefault();
                }
            });
            // onChanged
            myWiz.on('changed', function(e, data) {
                console.log('changed');
            });
            //onFinished
            $("MyWizard").on('finished', function(e, data) {
                console.log('finished');
            });

            // Handle events from previous/next/step
            // Previous btn click
            $('#btnWizardPrev').on('click', function() {
                $('#MyWizard').wizard('previous');
            });
            // Next btn click
            $('#btnWizardNext').on('click', function() {
                $('#MyWizard').wizard('next','foo');
            });
            // Step btn click
            $('#btnWizardStep').on('click', function() {
                var item = $('#MyWizard').wizard('selectedItem');
                console.log(item.step);
            });
            //
            myWiz.on('stepclick', function(e, data) {
                console.log('step' + data.step + ' clicked');
                if(data.step===1) {
                    // return e.preventDefault();
                }
            });
        }
    });
    // show an app view: both app and 'secondapp' trigger this
//    WizardView.on('wiz:show:step', function(view) {
//        console.log('wiz:show:step = ', view);
//        WizardView.
//        SocialChoring.content.show(view);
//    });
    // Returns the View class
    return WizardView;
});