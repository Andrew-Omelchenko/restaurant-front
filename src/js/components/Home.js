import { gather } from '../utils/helper';
import Component from '../framework/Component';
import Carousel from './Carousel';
import About from './About';

class Home extends Component {
  constructor(props) {
    super(props);

    this.parameters = getUrlParams(window.location.hash);
    // remove url parameters
    window.location.hash = (window.location.hash.split('?'))[0];

    this.carousel = new Carousel();
    this.about = new About();

    this.host = document.createElement('main');
    this.host.classList.add('home-content');
  }

  render() {
    return [
      this.carousel.update({}),      
      this.about.update({})
    ];
  }
}

export default Home;
