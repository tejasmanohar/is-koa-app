
/**
 * check if is koa app instance
 * via duck typing
 */

export default function(app) {
  return app && app.context && app.response && app.request
}
