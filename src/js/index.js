import '../sass/main.scss';
import 'bootstrap';
import 'datatables.net-bs4';
import { jQueryReset } from './utils/helper';
import Router from './framework/Router';
import routes from './routes';

const router = new Router({ routes, host: document.getElementById('root') });
jQueryReset();
