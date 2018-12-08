import Component from '../framework/Component';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';

class Proxy extends Component {
  constructor(props, component) {
    super(props);

    this.headerComponent = new HeaderComponent();
    this.navbarComponent = new NavbarComponent();
    this.component = component;
    this.footerComponent = new FooterComponent();

    this.host = document.createElement('div');
    this.host.classList.add('container-flex');
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.navbarComponent.update({}),
      this.component.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Proxy;
