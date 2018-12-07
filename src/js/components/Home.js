import { AUTH_SERVICE } from '../services/AuthService';
import Component from '../framework/Component';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent';

class Home extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
    this.navbarComponent = new NavbarComponent();
    this.homeComponent = new HomeComponent();
    this.footerComponent = new FooterComponent();

    this.host = document.createElement('div');
    this.host.classList.add('home');
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.navbarComponent.update({}),
      this.homeComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Home;
