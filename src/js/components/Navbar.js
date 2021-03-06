import Component from '../framework/Component';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('div');
    this.host.classList.add('nav-component');
  }

  render() {
    return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">WELCOME</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#/gallery">GALLERY</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                MENU
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#/featured">FEATURED</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#/dishes">FOOD</a>
                <a class="dropdown-item" href="#/drinks">DRINK</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/events">EVENTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/reservations">RESERVATIONS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/location">LOCATE US</a>
            </li>
          </ul>
          <div class="my-2 my-lg-0">
            <a class="btn btn-outline-success my-2 my-sm-0" href="#/search">Search</a>
          </div>
        </div>
      </nav>
    `;
  }
}

export default Navbar;
