import { Luminous, LuminousGallery } from 'luminous-lightbox';
import { API } from '../utils/config';
import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import { toHtml } from '../utils/helper';
import Component from '../framework/Component';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.data = [];
    this.luminousGallery = null;

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');

    AUTH_HTTP_SERVICE.getGallery()
      .then(res => {
        console.log(res);
        this.data = res.answer;
        this.updateState({});
        this.luminousGallery = new LuminousGallery(document.querySelectorAll('.our-gallery'));
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
    let imagesStr = '';

    this.data.forEach(element => {
      imagesStr += `
        <li class="list-inline-item my-1">
          <a class="our-gallery" href="${API.BASE_URL}${API.IMG_GALLERY}${element.image}.jpg">
            <img src="${API.BASE_URL}${API.IMG_GALLERY}${element.image}_tn.jpg">
          </a>
        </li>
      `;
    });

    const htmlString = `
      <section name="gallery">
        <h3 class="text-sm-left text-center">Our Gallery</h3>
        <p class="text-danger" id="alert-placeholder">&nbsp</p>
        <div class="row text-center bg-dark text-white">
          <ul class="list-inline">
            ${imagesStr}
          </ul>
        </div>
      </section>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Gallery;


