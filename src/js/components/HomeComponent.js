import Component from '../framework/Component';
import CarouselComponent from './CarouselComponent';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.carouselComponent = new CarouselComponent();

    this.host = document.createElement('div');
    this.host.classList.add('home-content');
  }

  render() {
    return [
      this.carouselComponent.update({})
    ];
  }
}

export default HomeComponent;
