import Component from '../framework/Component';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('footer');
    this.host.classList.add('footer');
  }

  render() {

    return `
      <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentFooter" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-expand" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContentFooter">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://www.facebook.com/profile.php?id=100013698678070">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.instagram.com/p/0nUyKnMJw4/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:welcome.vin@gmail.com">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tel:+442074057686">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

export default Footer;
