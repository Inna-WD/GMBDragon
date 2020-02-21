// set and update DOM to new page component
const getRoutesObject = routes =>
  routes.reduce(
    (acc, { route, component }) => ({ ...acc, [route]: component }),
    {}
  );

const goToPage = (app, component) => {
  app.flush(app.getParentElement());
  app.render(component);
  //   updateURL();
};

const init = (app, routeHash) => {
  // listen for route click
  document.querySelectorAll(`[data-route]`).forEach(route => {
    route.addEventListener("click", e => {
      e.preventDefault();
      const {
        target: {
          dataset: { route }
        }
      } = e;
      goToPage(app, routeHash[route]);
    });
  });
};

export default (appInstance, routes) => {
  const app = appInstance;
  const routeHash = getRoutesObject(routes);

  init(app, routeHash);

  return {
    default: routeHash[window.location.pathname]
      ? routeHash[window.location.pathname]
      : routeHash["/404"],
    init,
    getRoutesObject,
    goToPage
  };
};
