import { API } from '../utils/config';
import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import { toHtml, gather, scrollWindow } from '../utils/helper';
import Component from '../framework/Component';

class Events extends Component {
  constructor(props) {
    super(props);

    this.data = [];

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');

    AUTH_HTTP_SERVICE.getEvents()
      .then(res => {
        console.log(res);
        this.data = res.answer;
        this.updateState({});
        gather('Events');
        if (this.parameters.go) {
          scrollWindow(this.parameters.go);
        }
      })
      .catch(err => {
        document
            .getElementById('alert-placeholder')
            .innerHTML = `Error status: ${err.status || 
              'Server does not respond'}, ${err.answer || 
              'check connection'}`;
        gather('Events');
      });
  }

  render() {
    let eventsStr = '';

    this.data.forEach(element => {
      eventsStr += `
        <div class="col-sm-6 col-md-4 card" name="event-${element.id}">
          <div class="card-header">
            Featured
          </div>
          <img class="card-img-top" src="${API.BASE_URL}${API.IMAGES}${element.image}" alt="${element.event}">
          <div class="card-body">
            <h5 class="card-title">${element.event}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text font-weight-bold">Starts: ${element.date} at ${element.time}</p>
          </div>
        </div>
      `;
    });

    const htmlString = `
      <section name="events">
        <h3 class="text-sm-left text-center">Our Events</h3>
        <p class="text-danger" id="alert-placeholder">&nbsp</p>
        <div class="row text-center">
          ${eventsStr}
        </div>
      </section>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Events;

