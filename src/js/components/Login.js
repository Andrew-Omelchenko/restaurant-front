import Component from '../framework/Component';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import LoginComponent from './LoginComponent';
import FooterComponent from './FooterComponent';

class Login extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
    this.navbarComponent = new NavbarComponent();
    this.loginComponent = new LoginComponent();
    this.footerComponent = new FooterComponent();

    this.host = document.createElement('div');
    this.host.classList.add('login');
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.navbarComponent.update({}),
      this.loginComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Login;
