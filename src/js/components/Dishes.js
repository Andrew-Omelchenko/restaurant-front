var $ = require('jquery');
import { jQueryReset } from '../utils/helper';

import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import Component from '../framework/Component';

class Dishes extends Component {
  constructor(props) {
    super(props);

    this.data = [];

    this.host = document.createElement('div');
    this.host.classList.add('container');

    AUTH_HTTP_SERVICE.getDishes()
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
      <table id="table_id" class="table table-sm table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
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
          <td>${elem.description}</td>
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

export default Dishes;
