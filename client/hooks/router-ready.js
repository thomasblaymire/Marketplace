export function isRouterReady(router) {
  return router.asPath !== router.route;
}
