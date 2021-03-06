import Component from '../framework/Component';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('section');
    this.host.classList.add('container-fluid', 'bg-dark', 'text-white');
  }

  render() {
    return `
      <div class="row">
        <div class="col-sm-8">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/carousel-food.jpg" alt="days">
                <div class="carousel-caption">
                  <h3>Rest with Your Friends</h3>
                  <p>Have a great time!</p>
                  <a href="tel:+442074057686" class="btn btn-outline-success">ORDER</a>
                </div>   
              </div>
              <div class="carousel-item">
                <img src="./img/carousel-table.jpg" alt="reservations">
                <div class="carousel-caption">
                  <h3>Table Reservation</h3>
                  <p>Entertainment Activities!</p>
                  <a href="#/reservations" class="btn btn-outline-success">RESERVE</a>
                </div>   
              </div>
              <div class="carousel-item">
                <img src="./img/carousel-restaurant.jpg" alt="cooking">
                <div class="carousel-caption">
                  <h3>Great Cooking</h3>
                  <p>From top chefs...</p>
                  <a href="#/featured" class="btn btn-outline-success">MENU</a>
                </div>   
              </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
        <div name="mission" class="col-sm-4 text-center">
          <p>Food as it should be. Food should taste good. It should feel good. It should do good things for you and the world around you.</p>
          <p>WELCOME!</p>
        </div>
      </div>
    `;
  }
}

export default Carousel;
