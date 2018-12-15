import { FEAT_ARR } from '../utils/config';
import { bindAll, toHtml, gather } from '../utils/helper';
import Component from '../framework/Component';

class Featured extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');
  }

  render() {
    let dishesStr = '';
    FEAT_ARR.forEach(element => {
      dishesStr += `
        <figure class="col-lg-3 col-md-4 col-sm-6 shadow" name="${element.TITLE}">
          <figcaption class="figure-caption font-weight-bold">${element.TITLE}</figcaption>
          <div class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="${element.IMAGE}" alt="${element.TITLE}">
            <p><small>${element.DESCRIPTION}</small></p>
            <p class="font-weight-bold">
              Price: $${element.PRICE.toFixed(2)}
            </p>
          </div>
        </figure>
      `;
    });

    const htmlString = `
      <section name="featured">
        <h3 class="text-sm-left text-center">Featured dishes</h3>
        <div class="row text-center">
          ${dishesStr}
        </div>
      </section>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Featured;
