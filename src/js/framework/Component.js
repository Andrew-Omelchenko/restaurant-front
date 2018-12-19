import { bindAll, getUrlParams } from '../utils/helper';

class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;
    this.parameters = getUrlParams(window.location.hash);

    bindAll(this, 'updateState', 'update', 'postRender');
  }

  _render() {
    const children = this.render();

    this.host.innerHTML = '';

    if (typeof children === 'string') {
      this.host.innerHTML = children;
    } else if (Array.isArray(children)) {
      children.forEach(child => {
        this.host.appendChild(child);
      });
    } else {
      this.host.appendChild(children);
    }

    this.postRender();

    return this.host;
  }

  onReceiveProps(nextProps) {}

  update(nextProps) {
    this.onReceiveProps(nextProps);
    this.props = nextProps;
    return this._render();
  }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);

    this.state = nextState;
    this._render();

    return nextState;
  }

  render() {}

  postRender() {}
}

export default Component;
