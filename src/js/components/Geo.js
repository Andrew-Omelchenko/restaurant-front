import { MAP_API } from '../utils/config';
import { toHtml } from '../utils/helper';
import Component from '../framework/Component';

class Geo extends Component {
  constructor(props) {
    super(props);

    // this.position = {
    //   coords: {
    //     latitude: 49.224908799999994,
    //     longitude: 28.401664
    //   }
    // };

    this.host = document.createElement('section');
    this.host.classList.add('container-fluid', 'geo');
    this.host.addEventListener('click', this.goLive);
  }

  goLive(ev) {
    if (ev.target.id === 'btn-live') {
      
      const map = L.map('map_id').setView([MAP_API.LAT, MAP_API.LON], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([MAP_API.LAT, MAP_API.LON]).addTo(map)
          .bindPopup('We are here.<br> Welcome!')
          .openPopup();

      // disable button
      ev.target.disabled = true;
    }
  }

  render() {
    const htmlString = `
      <div class="row bg-dark text-white">
        <div class="col-sm-3 text-sm-right text-center geo__left">
          <p>OUR LOCATION</p>
          <h4>Restaurant “WELCOME”</h4>
          <p>Vinnytsia, Unknown str, 61</p>
          <p>Everyday.</p>
          <p>From dusk till dawn.</p>
          <p>For you!</p>
          <button class="btn" id="btn-live" type="button">LIVE MAP</Button>
        </div>
        <div class="col-sm-9 text-center" id="map_id">
        </div>
      </div>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Geo;

