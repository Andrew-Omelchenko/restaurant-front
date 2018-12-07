import Component from '../framework/Component';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import RegisterComponent from './RegisterComponent';
import FooterComponent from './FooterComponent';

class Register extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
    this.navbarComponent = new NavbarComponent();
    this.registerComponent = new RegisterComponent();
    this.footerComponent = new FooterComponent();

    this.host = document.createElement('div');
    this.host.classList.add('register');
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.navbarComponent.update({}),
      this.registerComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Register;
