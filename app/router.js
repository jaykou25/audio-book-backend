"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);

  router.get("/eps", controller.eps.index);
  router.get("/newEps", controller.eps.newEps);

  router.get("/tracks/:id", controller.tracks.show);
};
