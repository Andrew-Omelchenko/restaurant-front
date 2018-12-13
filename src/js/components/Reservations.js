import { RESERVATIONS } from '../utils/config';
import { bindAll, toHtml, diff, toDateSting, isDateStringValid } from '../utils/helper';
import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import Component from '../framework/Component';

class Reservations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: toDateSting(new Date()),
      tableId: 1,
      hours: RESERVATIONS.HOURS,
      disabled: true
    }

    bindAll(this, 'reInit', 'onClick', 'onChange', 'onSubmit');

    this.host = document.createElement('section');
    this.host.classList.add('container-fluid', 'reservations');

    this.host.addEventListener('click', this.onClick, true);
    this.host.addEventListener('change', this.onChange, true);
    this.host.addEventListener('submit', this.onSubmit, true);

    this.reInit(this.state.date, this.state.tableId);
  }

  reInit(date, tableId) {
    const queryData = {
      tableId,
      date
    };

    AUTH_HTTP_SERVICE.getHours(queryData)
      .then(res => {
        this.updateState({
          date,
          tableId,
          hours: diff(RESERVATIONS.HOURS, res.answer.map(element => element.reserved_hour)),
          disabled: false
        });
        document.getElementById('table').value = tableId;
      })
      .catch(err => {
        document
          .getElementById('alert-placeholder')
          .innerHTML = `Error status: ${err.status || 
            'Server does not respond'}, ${err.answer || 
            'check connection'}`;
        const button = document.getElementById('order-btn');
        button.setAttribute('disabled', true);
        button.classList.remove('btn-primary');
        button.classList.remove('btn-disabled');
        button.classList.add('btn-disabled');
      });
  }

  onClick(ev) {
    if (ev.target.id !== '') {
      if (ev.target.id.slice(0, -1) === 'table-') {
        document.getElementById('table').value = ev.target.id.slice(-1);
        this.reInit(
          document.getElementById('date').value,
          Number(document.getElementById('table').value)
        );
      }
    }
  }

  onChange(ev) {
    if (ev.target.id === 'date' || ev.target.id === 'table') {
      this.reInit(
        document.getElementById('date').value,
        Number(document.getElementById('table').value)
      );
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    const form = document.getElementById('reservations-form');
    const hours = Array.from(form.elements['hours'])
      .filter(element => element.checked)
      .map(element => Number(element.value));
    console.log(hours);
  }

  render() {
    const { date, tableId, hours, disabled } = this.state;

    let tablesStr = '';
    let pathsStr = '';
    RESERVATIONS.TABLES.forEach(element => {
      tablesStr += `<option value="${element.ID}">${element.STR} - ${element.SEATS} seats</option>`;
      pathsStr += `
        <g>
          <title>${element.STR}</title>
          ${element.PATH}
        </g>
      `;
    });

    let hoursStr = '';
    if (hours.length === 0) {
      hoursStr = `<p id="hours" name="hours" class="text-danger">Sorry, there are no tables available</p>`;
    } else {
      hours.forEach(element => {
        hoursStr += `
          <label><input type="checkbox" name="hours" value="${element}">${element}:00</label>
        `;
      });
    }

    // Thank to:
    // https://patrickkettner.com/posts/responsive-image-maps/
    // http://thenewcode.com/744/Make-SVG-Responsive

    const htmlString = `
      <div class="row bg-dark text-white">
        <div class="col-sm-6 text-center">
          <div class="svg-container">
            <img class="reservations__plan" src="${RESERVATIONS.IMAGE_STR}" alt="restaurant-plan">
            <svg class="svg-content" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 640 572" style="enable-background:new 0 0 640 572;" xml:space="preserve">
              <style type="text/css">
                .st0{ fill:transparent; }
              </style>
              ${pathsStr}
            </svg>
          </div>
        </div>
        <div class="col-sm-6 text-sm-left text-center">
          <form id="reservations-form" class="reservations-form">
            <p class="text-danger" id="alert-placeholder">&nbsp</p>
            <div class="form-group">
              <label for="date">Choose a date:</label>
              <input 
                name="date" 
                class="form-control" 
                id="date" 
                type="date"  
                min="${toDateSting(new Date())}" 
                max="3000-01-01" 
                required
                value="${date}">
            </div>
            <div class="form-group">
              <label for="table">Select a table or click one on the plan:</label>
              <select 
                name="table" 
                class="form-control" 
                id="table"  
                required
                value="${tableId}">
                ${tablesStr}
              </select>  
            </div>
            <div class="form-group">
              <label for="hours">Choose hours to reserve:</label>
              <div class="chb-group">
                ${hoursStr}
              </div>
            </div>
            <button class="btn ${disabled ? 'btn-disabled' : 'btn-primary'}" id="order-btn" type="submit" ${disabled ? 'disabled' : ''}">Submit</button>
          </form>
        </div>
      </div>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Reservations;
