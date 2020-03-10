import { render, flush } from "./Spaf.js";

// set and update DOM to new page component
export const getRoutesObject = routes =>
  routes.reduce(
    (acc, { route, component }) => ({ ...acc, [route]: component }),
    {}
  );

export const goToPage = (root, component, params) => {
  const html = component(params);
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
    goToPage(rootElm, routeHash[route], path[1]);
  });
};

export default (rootElem, routes) => {
  const routeHash = getRoutesObject(routes);
  const path = window.location.pathname.replace(/^\/+/g, '').split('/');
    let route = `/${path[0]}`;
    if(path.length > 1) {
      route = route + '/:param'
    }

  init(rootElem, routeHash);
  return routeHash[route]
    ? routeHash[route](path[1])
    : routeHash["/404"]();
};
