import { bindAll, toHtml } from '../utils/helper';
import Component from '../framework/Component';

class Search extends Component {
  constructor(props) {
    super(props);

    bindAll(this, 'onSubmit');

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');

    this.host.addEventListener('submit', this.onSubmit, true);
  }

  onSubmit(ev) {
    ev.preventDefault();
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
