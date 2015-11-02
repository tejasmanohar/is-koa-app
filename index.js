
/**
 * check if is koa app instance
 * via duck typing
 */

module.exports = function(app) {
  return app && app.context && app.response && app.request
}
