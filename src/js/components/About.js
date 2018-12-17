import Component from '../framework/Component';

class About extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('section');
    this.host.classList.add('container');
    this.host.setAttribute('name', 'about');
  }

  render() {
    return `
      <div class="row">
        <div class="col-sm-12 text-sm-left text-center">
          <h3>About Us</h3>
        </div>
      </div>
      <div class="row">
        <div name="about" class="col-sm-12 text-sm-left text-center">
          <p>
            <img class="img-fluid about__img" src="./img/interior.jpg" alt="interior">
            <span class="d-block">
              WELCOME is designed to create a community atmosphere as a good, old fashioned, friendly, neighborhood restaurant. The location at 61 Unknown St. puts the restaurant in the heart of lively, downtown Vinnytsia.
            </span>
            <span class="d-block">
              &nbsp;
            </span>
            <span class="d-block">
              A priority of WELCOME is serving fresh, healthful fare with all selections made on the premises from "scratch." To keep food costs down, the menu is simple, yet creative with many interchangeable ingredients. Foods come from local and regional suppliers whenever possible, with a preference for organically grown products. Emphasis is placed on the menu which features old-world menu cooked daily. A deli counter, fine coffees, and a fresh juice bar is also showcased.
            </span>
            <span class="d-block">
              &nbsp;
            </span>
            <span class="d-block">
              The limited menu is based on "comfort" foods at reasonable prices.
            </span>
          </p>
      </div>
    `;
  }
}

export default About;

