import { toHtml, jQueryReset, gather, scrollWindow } from '../utils/helper';

import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import Component from '../framework/Component';

class Drinks extends Component {
  constructor(props) {
    super(props);

    this.data = [];

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid', 'drinks');

    AUTH_HTTP_SERVICE.getDrinks()
      .then(res => {
        console.log(res);
        this.data = res.answer;
        this.updateState({});
        if (!this.parameters.go) {
          jQueryReset('table_id');
        } else {
          scrollWindow(this.parameters.go);
        }
        gather('Drinks');
      })
      .catch(err => {
        document
          .getElementById('alert-placeholder')
          .innerHTML = `Error status: ${err.status || 
            'Server does not respond'}, ${err.answer || 
            'check connection'}`;
        gather('Drinks');
      });
  }

  render() {
    let str = `
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
        <tr name="drink-${elem.id}">
          <th scope="row">${elem.id}</th>
          <td>${elem.item}</td>
          <td>${elem.category}</td>
          <td>${elem.price}</td>
        </tr>`;
    });

    str += `
        </tbody>
    `;
    
    const table = document.createElement('table');
    table.setAttribute('id', 'table_id');
    table.setAttribute('name', 'drinks');
    table.classList.add('table', 'table-sm');
    table.innerHTML = str;
    if (!this.parameters.go) {
      jQueryReset('table_id');
    }

    const bodyStr = `
      <section class="row">
        <div class="col-sm-12">
          <h3>List of Drinks</h3>
          <p class="text-danger" id="alert-placeholder">&nbsp</p>
          <div id="table-placeholder"></div>
        </div>
      </section>
    `;

    const body = toHtml(bodyStr);
    body.querySelector('#table-placeholder').appendChild(table);
    
    return [
      body
    ];
  }
}

export default Drinks;

