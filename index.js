/**
 * Freebox Hooks
 */
module.exports = function(sails) {
   
   var loader = require("sails-util-mvcsloader")(sails);
    loader.injectAll({
        policies: __dirname + '/policies',
        config: __dirname + '/config'
    });
    
   return {
      defaults: require('./lib/defaults'),
      configure: require('./lib/configure')(sails),
      initialize: require('./lib/initialize')(sails),
      routes: require('./lib/routes')(sails),
    };

};
