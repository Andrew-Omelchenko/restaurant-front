import Component from './Component';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Proxy extends Component {
  constructor(props, component) {
    super(props);

    this.header = new Header();
    this.component = component;
    this.footer = new Footer();

    this.host = document.createElement('div');
    this.host.classList.add('container-flex');
  }

  render() {
    return [
      this.header.update({}),
      this.component.update({}),
      this.footer.update({})
    ];
  }
}

export default Proxy;
