import Component from '../framework/Component';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('footer');
    this.host.classList.add('footer');
  }

  render() {

    return `
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 text-sm-left text-center">
            <a href="https://www.facebook.com/profile.php?id=100013698678070" class="text-white footer__href">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/p/0nUyKnMJw4/" class="text-white footer__href">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="mailto:welcome.vin@gmail.com" class="text-white footer__href">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
          <div class="col-sm-9 text-sm-right text-center footer__phone">
            <a href="tel:+442074057686" class="text-white">+44(20) 74057686</a>
          </div>
        </div>
      </div>
    `;
  }
}

export default Footer;
