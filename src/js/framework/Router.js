import { jQueryReset, getUrlParams, getOffset } from '../utils/helper';
import Component from './Component';
import Proxy from './Proxy';
import { bindAll, isEqualPaths, extractUrlParams } from '../utils/helper';

class Router extends Component {
  constructor(props) {
    super(props);

    const { routes, host } = props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null
    };

    this.host = host;
    this.parameters = {};


    bindAll(this, 'handleUrlChange', 'navigateTo');

    window.addEventListener('hashchange', () => {
      this.handleUrlChange(this.path);
    });

    this.handleUrlChange(this.path);
  }

  get path() {
    this.parameters = getUrlParams(window.location.hash);
    return (window.location.hash.slice(1).split('?'))[0];
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;

    // const nextRoute = routes.find(({ href }) => href === this.path);
    const nextRoute = routes.find(({ href }) => isEqualPaths(href, path));
    console.log(nextRoute);

    if (nextRoute && nextRoute !== currentRoute) {
      if (nextRoute.onEnter) {
        this.handleOnEnter(nextRoute);
        return;
      }

      if (nextRoute.authorized && !nextRoute.authorized()) {
        this.navigateTo('/login');
        return;
      }

      if (nextRoute.redirectTo) {
        this.navigateTo(nextRoute.redirectTo);
        return;
      }

      this.updateState({
        currentComponent: new Proxy({}, new nextRoute.component()),
        currentRoute: nextRoute
      });

      if (this.parameters.go) {
        const nodes = document.getElementsByName(this.parameters.go);
        if (nodes[0]) {
          nodes[0].classList.add('bg-yellow', 'text-dark');
          const headerRect = document.getElementById('header').getBoundingClientRect();
          nodes[0].scrollIntoView();
          window.scrollBy(0, -headerRect.height);
        }
      }
    }
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  handleOnEnter({ onEnter }) {
    onEnter(this.navigateTo);
  }

  render() {
    const { currentComponent, currentRoute } = this.state;

    return currentComponent.update({
      params: extractUrlParams(currentRoute.href, this.path)
    });
  }
}

export default Router;
