// Inspectors.js
// -------------
define(["jquery", "collections/Collection", "models/Inspector"],

  function($,  Collection, Inspector) {

    // Creates a new Backbone Collection class object
      /** @namespace app.models.Inspector */
      var Inspectors = Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Inspector,
      url: 'http://ec2-50-17-123-144.compute-1.amazonaws.com/SC_RESTful-0.1.0.BUILD-SNAPSHOT/inspectors'

    });

    // Returns the Inspector class
    return Inspectors;

  }

);