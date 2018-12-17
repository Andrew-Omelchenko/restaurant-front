import { bindAll, toHtml, processNode, processString } from '../utils/helper';
import routes from '../routes';
import Component from '../framework/Component';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchStr = '';
    this.total = 0;
    // number of ready async queries
    this.readyCount = 0;
    // total number of async queries in structure
    this.asyncCount = 3;
    
    this.structure = routes
      .filter(route => route.searchable)
      .map(route => {
        return {
          alias: route.alias,
          href: route.href,
          value: new route.component({}).update({}), // async in its nature
          parsed: [],
          count: 0
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
    // when all async queries are finished (successfully or not) ...
    if (this.readyCount === this.asyncCount) {
      this.structure.forEach(element => {
        element.parsed = processNode(element.value);
      });
      console.log(this.structure);
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    const form = document.getElementById('search-form');
    this.searchStr = form.search.value;
    this.processStructure();
    this.updateState({});
  }

  processStructure() {
    let total = 0;
    this.structure.forEach(element => {
      let subtotal = 0;
      element.parsed.forEach(parsel => {
        const { processed, count } = processString(this.searchStr, parsel.text);
        parsel.processed = processed;
        parsel.count = count;
        subtotal += count;
      });
      element.count = subtotal;
      element.parsed.sort((elem1, elem2) => elem2.count - elem1.count); // sort descending
      total += subtotal;
    });
    this.total = total;
    this.structure.sort((elem1, elem2) => elem2.count - elem1.count); // sort descending
    console.log(this.structure, this.total);
  }

  render() {
    let treeStr = `<ul>`;
    this.structure
      .filter(element => element.count)
      .forEach(element => {
        treeStr += `
          <li class="font-weight-bold">
            <a href="#${element.href}">${element.alias}</a>: Count: ${element.count}
          </li>
        `;
        treeStr += `<ul>`;
        element.parsed
          .filter(parsel => parsel.count)
          .forEach(parsel => {
            treeStr += `
              <li>
                <a class="d-block font-weight-bold" href="#${element.href}?go='${parsel.name}'">${parsel.name}</a>
                <span class="d-block"><small>Count: ${parsel.count}</small></span>
                <span class="d-block"><small>${parsel.processed}</small></span>
              </li>
            `;
          });
        treeStr += `</ul>`;
      });
    treeStr += `</ul>`;

    const htmlString = `
      <section>
        <div class="row">
          <div class="col-sm-12">
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
            <p class="text-danger" id="alert-placeholder">&nbsp</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <h3>Search results:</h3>
            <p class="font-weight-bold">Total: ${this.total}</p>
            ${treeStr}
          </div>
        </div>
      </section>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Search;
