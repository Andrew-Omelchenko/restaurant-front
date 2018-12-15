import { bindAll, toHtml } from '../utils/helper';
import routes from '../routes';
import Component from '../framework/Component';
import { runInContext } from 'vm';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchText = '';
    
    this.structure = routes
      .filter(route => route.searchable)
      .map(route => {
        return {
          href: route.href,
          value: new route.component({}).update({})
        };
      });
      console.log(this.structure);

    bindAll(this, 'onSubmit');

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');

    this.host.addEventListener('submit', this.onSubmit, true);
  }

  onSubmit(ev) {
    ev.preventDefault();

    const form = document.getElementById('search-form');
    this.searchText = form.search.value;
    console.log(this.searchText);
  }

  render() {
    const htmlString = `
      <section>
        <div class="row">
          <form id="search-form" class="form-inline my-2 my-lg-0 search-form">
            <input 
              name="search" 
              class="form-control" 
              id="search" 
              type="text" 
              placeholder="Enter search text here..."
              required 
              value="">
            <button 
              class="btn btn-outline-success my-2 my-sm-0" 
              id="search-btn" 
              type="submit">
              Search
            </button>
          </form>
        </div>
        <div class="row">
          <p class="text-danger" id="alert-placeholder">&nbsp</p>
        </div>
      </section>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Search;
