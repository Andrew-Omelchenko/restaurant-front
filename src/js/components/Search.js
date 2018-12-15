import { bindAll, toHtml } from '../utils/helper';
import { SEARCH_ROOTS } from '../utils/config';
import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import Component from '../framework/Component';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchText = '';
    this.searchData = [];
    this.texts = [];

    bindAll(this, 'onSubmit');

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');

    this.host.addEventListener('submit', this.onSubmit, true);
  }

  _getHtmlText() {
    return AUTH_HTTP_SERVICE.get(`${url}`);
  }

  onSubmit(ev) {
    ev.preventDefault();

    const form = document.getElementById('search-form');
    this.searchText = form.search.value;
    console.log(window.location);
    this.searchData = SEARCH_ROOTS.map(element => {
      return {
        url: `${window.location.origin}/#${element}`,
        htmlString: ''
      };
    });
    console.log(this.searchData);
    // creates array of promises
    const headers = new Headers({ 'content-type': 'text/html' });
    const init = { 
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default' 
    };

    const promises = this.searchData.map(element => fetch(`${element.url}`, init));
    Promise.all(promises).then(values => { 
      values.forEach(value => {
        console.log(value.text());
      });
    });
  }

  render() {
    const htmlString = `
      <section class="row">
        <form id="search-form" class="form-inline my-2 my-lg-0 search-form">
          <p class="text-danger" id="alert-placeholder">&nbsp</p>
          <input 
            name="search" 
            class="form-control" 
            id="search" 
            type="text" 
            placeholder="Enter search text here..."
            required 
            value="">
          </div>
          <button 
            class="btn btn-outline-success my-2 my-sm-0" 
            id="search-btn" 
            type="submit">
            Search
          </button>
        </form>
      </section>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Search;
