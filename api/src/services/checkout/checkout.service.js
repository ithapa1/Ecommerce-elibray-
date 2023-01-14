// Initializes the `checkout` service on path `/checkout`
const { Checkout } = require('./checkout.class');
const createModel = require('../../models/checkout.model');
const hooks = require('./checkout.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/checkout', new Checkout(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('checkout');

  service.hooks(hooks);
};
