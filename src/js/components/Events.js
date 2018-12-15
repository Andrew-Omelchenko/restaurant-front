import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import { toHtml } from '../utils/helper';
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
      })
      .catch(err => {
        document
            .getElementById('alert-placeholder')
            .innerHTML = `Error status: ${err.status || 
              'Server does not respond'}, ${err.answer || 
              'check connection'}`;
      });
  }

  render() {
    let eventsStr = '';

    this.data.forEach(element => {
      eventsStr += ``;
    });

    const htmlString = `
      <section>
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

