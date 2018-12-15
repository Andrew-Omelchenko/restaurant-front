import { gather } from '../utils/helper';
import Component from '../framework/Component';
import Carousel from './Carousel';

class Home extends Component {
  constructor(props) {
    super(props);

    this.carousel = new Carousel();

    this.host = document.createElement('main');
    this.host.classList.add('home-content');
  }

  render() {
    return [
      this.carousel.update({})
    ];
  }
}

export default Home;
