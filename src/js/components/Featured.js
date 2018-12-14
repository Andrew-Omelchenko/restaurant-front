import { FEAT_ARR } from '../utils/config';
import { bindAll, toHtml } from '../utils/helper';
import Component from '../framework/Component';

class Featured extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('main');
    this.host.classList.add('container');
  }

  render() {
    let dishesStr = '';
    FEAT_ARR.forEach(element => {
      dishesStr += `
        <div class="col-lg-3 col-md-4 col-xs-6">
          <span class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="${element.IMAGE}" alt="${element.TITLE}">
          </span>
        </div>
      `;
    });

    const htmlString = `
      <h3 class="text-sm-left text-center">Featured dishes</h3>
      <div class="row text-center">
        ${dishesStr}
      </div>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Featured;
