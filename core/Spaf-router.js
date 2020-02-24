import { render, flush } from "./Spaf.js";

// set and update DOM to new page component
export const getRoutesObject = routes =>
  routes.reduce(
    (acc, { route, component }) => ({ ...acc, [route]: component }),
    {}
  );

export const goToPage = (root, component) => {
  const html = component();
  flush(root());
  render(html, root());
};

export const init = (rootElm, routeHash) => {
  // listen for route click
  document.querySelectorAll(`[data-route]`).forEach(route => {
    route.addEventListener("click", e => {
      e.preventDefault();
      const {
        target: {
          dataset: { route }
        }
      } = e;
      goToPage(rootElm, routeHash[route]);
      window.history.pushState({ path: route }, "", route);
    });
  });

  //listen to navigation history event
  window.addEventListener("popstate", e => {
    goToPage(rootElm, routeHash[window.location.pathname]);
  });
};

export default (rootElem, routes) => {
  const routeHash = getRoutesObject(routes);
  init(rootElem, routeHash);

  return routeHash[window.location.pathname]
    ? routeHash[window.location.pathname]
    : routeHash["/404"];
};
