/**
 * User: Andrew
 * Date: 1/27/13
 * Time: 9:30 AM
 */
define(["jquery", "marionette", "text!templates/HomeLayout.html"],

    function($, marionette, template){

        var HomeView = marionette.ItemView.extend({
            template: template,

            initialize: function(){
                console.log("HomeView initalise ")
            },
            events:{
                "click #choice_description_region":"gotClicked"
            },
            gotClicked:function(){
                console.log("Got CLICKED")
            }
        });

        // Returns the ItemView class
        return  HomeView;

    }

);