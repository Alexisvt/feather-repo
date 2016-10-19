// @flow
'use strict';

const signup = require('./signup');
const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

// Allowing react
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../../app/routers';

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.set('view engine', 'ejs');

  app.get('*', (req, res) => {
  match({
    routes,
    location: req.url
  }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
          res.status(500).send(err.message);
        } else if (redirectLocation) {
          // we matched a ReactRouter redirect, so redirect from the server
          res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
        } else if (props) {
          // if we got props, that means we found a valid component to render
          // for the given route
          const markup = renderToString(<RouterContext {...props} ></RouterContext>);

          res.render('index', { markup });
        } else {
          // no route match, so 404. In a real app you might render a custom
          // 404 view here
          res.sendStatus(404);
        }
      });
  });
  app.post('/signup', signup(app));
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
