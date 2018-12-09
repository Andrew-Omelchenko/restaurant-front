import { jQueryReset } from '../utils/helper';

import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import Component from '../framework/Component';

class Drinks extends Component {
  constructor(props) {
    super(props);

    this.data = [];

    this.host = document.createElement('section');
    this.host.classList.add('container', 'drinks');

    AUTH_HTTP_SERVICE.getDrinks()
      .then(res => {
        console.log(res);
        this.data = res.answer;
        this.updateState({});
        jQueryReset();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let str = `
      <h3>WINE CARD</h3>
      <table id="table_id" class="table table-sm table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>`;

    this.data.forEach(elem => {
      str += `
        <tr>
          <th scope="row">${elem.id}</th>
          <td>${elem.item}</td>
          <td>${elem.category}</td>
          <td>${elem.price}</td>
        </tr>`;
    });

    str += `
        </tbody>
      </table>`;
    return str;
  }
}

export default Drinks;

