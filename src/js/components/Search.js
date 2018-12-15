import { bindAll, toHtml, processNode } from '../utils/helper';
import routes from '../routes';
import Component from '../framework/Component';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchText = '';
    // number of ready async queries
    this.readyCount = 0;
    // total number of async queries in structure
    this.asyncCount = 3;
    
    this.structure = routes
      .filter(route => route.searchable)
      .map(route => {
        return {
          href: route.href,
          value: new route.component({}).update({}) // async in its nature
        };
      });
      // this.structure.forEach(el => console.log(el.value.textContent));

    bindAll(this, 'onSubmit', 'onGather');

    this.host = document.createElement('main');
    this.host.classList.add('container-fluid');

    this.host.addEventListener('submit', this.onSubmit, true);
    document.removeEventListener('gather', this.onGather, true);
    document.addEventListener('gather', this.onGather, true);
  }

  onGather(ev) {
    this.readyCount++;
    // if all async queries are finished...
    if (this.readyCount === this.asyncCount) {
      // this.structure.forEach(el => console.log(el.value.textContent));
      console.log(processNode(this.structure[2].value));
    }
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
