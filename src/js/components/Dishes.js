import { jQueryReset } from '../utils/helper';

import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import Component from '../framework/Component';

class Dishes extends Component {
  constructor(props) {
    super(props);

    this.data = [];

    this.host = document.createElement('section');
    this.host.classList.add('container', 'dishes');

    AUTH_HTTP_SERVICE.getDishes()
      .then(res => {
        console.log(res);
        this.data = res.answer;
        this.updateState({});
        jQueryReset('table_id');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let str = `
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
          <th scope="row">${elem.id}</span></th>
          <td>${elem.item}</span></td>
          <td>${elem.description}</span></td>
          <td>${elem.category}</td>
          <td>${elem.price}</td>
        </tr>`;
    });

    str += `
        </tbody>
    `;

    const table = document.createElement('table');
    table.setAttribute('id', 'table_id');
    table.classList.add('table', 'table-sm', 'table-striped');
    table.innerHTML = str;
    jQueryReset('table_id');
    
    return table;
  }
}

export default Dishes;
