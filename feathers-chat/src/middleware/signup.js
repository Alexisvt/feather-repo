// @flow
'use strict';
import HttpStatus from 'http-status-codes';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    const body =req.body;

    // Get the user service and `create` a new user
    app.service('users').create({
      email: body.email,
      password: body.password
    })

    // Then redirect to the login page 
    // note: we will redirect on the client side
    .then(user => {
      res.status(HttpStatus.CREATED);
      res.send('created');
    })
    // On errors, just call our error middleware
    .catch(next);
    
  };
};
