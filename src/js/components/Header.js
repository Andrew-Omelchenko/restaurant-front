import { toHtml } from '../utils/helper';
import Component from '../framework/Component';
import Clock from './Clock';
import Options from './Options';
import Navbar from './Navbar';

class Header extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('header');
    this.host.setAttribute('id', 'header');
    this.host.classList.add('header', 'fixed-top');
    // this.host.classList.add('fixed-top');

    this.clock = new Clock();
    this.options = new Options(props);
    this.navbar = new Navbar(props);
  }

  render() {
    let login = false;
    if (this.props) {
      const { isLogin } = this.props;
      login = isLogin;
    }

    const htmlString = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 text-sm-left text-center" id="clock-placeholder"></div>
          <div class="col-sm-4 text-center">
            <img class="header__logo" src="./img/welcome.png" alt="logo">
          </div>
          <div class="col-sm-4 text-sm-right text-center" id="options-placeholder"></div>
        </div>
      </div>
    `;

    const node = toHtml(htmlString);
    node.querySelector('#clock-placeholder').appendChild(this.clock.update());
    node.querySelector('#options-placeholder').appendChild(this.options.update({ isLogin: login}));

    return [
      node,
      this.navbar.update({})
    ];
  }
}

export default Header;
