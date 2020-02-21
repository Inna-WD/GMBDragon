// set and update DOM to new page component
const getRoutesObject = routes =>
  routes.reduce(
    (acc, { route, component }) => ({ ...acc, [route]: component }),
    {}
  );

const goToPage = (app, component) => {
  app.flush();
  app.render(component);
  //   updateURL();
};

export default (appInstance, routes) => {
  const routeObj = getRoutesObject(routes);
  // listen for route click
  document.querySelectorAll(`[data-route]`).forEach(route => {
    route.addEventListener("click", e => {
      e.preventDefault();
      const {
        target: {
          dataset: { route }
        }
      } = e;
      goToPage(appInstance, routeObj[route]);
    });
  });
  return routeObj[window.location.pathname]
    ? routeObj[window.location.pathname]
    : routeObj["/404"];
};
