var $ = require( 'jquery' );

export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};

// export const toHtml = string => {
//   const template = document.createElement('template');
//   template.innerHTML = string.trim();

//   return template.content;
// };

export function toHtml(string) {
  const template = document.getElementById('temp_id');
  template.innerHTML = string.trim();

  return template.content.cloneNode(true);
};

const URL_PARAM_REGEXP = /:\w+/g;

const isUrlParam = path => URL_PARAM_REGEXP.test(path);
const urlToRegExp = url => RegExp(`^${url.replace(URL_PARAM_REGEXP, '(.*)')}$`);
export const isEqualPaths = (template, url) => urlToRegExp(template).test(url);

// template -> /user/:id
// url -> /user/12
export const extractUrlParams = (template, url) => {
  const values = url.split('/');  // ['user', '12']
  const params = {};

  if (!values) {
    return params;
  }

  return template.split('/').reduce((acc, param, index) => {
    if (!isUrlParam(param)) {
      return acc;
    }
    // We need to remove ':' from param name
    acc[param.slice(1)] = values[index];

    return acc;
  }, params);
};

export const processResponse = res => {
  if (res.ok) {
    return res.json().then(answer => Promise.resolve({ answer, status: res.status }));
  }
  return res.json().then(answer => Promise.reject({ answer, status: res.status }));
};

export function align2(smth) {
  if (smth < 10) {
      return `0${smth.toString()}`;
  }
  return smth.toString();
};

export function jQueryReset(table_name) {
  $(`#${table_name}`).DataTable();
  $('.dataTables_length').addClass('bs-select');
};

export function diff(arr1, arr2) {
  return arr1.filter(function(i) {
    return arr2.indexOf(i) < 0;
  });
};

export function toDateSting(dateObj) {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const dayOfMonth = dateObj.getDate();
    return `${year}-${month}-${dayOfMonth}`;
};

export function isDateStringValid(dateStr) {
  const date = new Date(dateStr);
  if (date == 'Invalid Date') {
    return false;
  }
  return true;
};

export function gather(data) {
  const event = new CustomEvent('gather', { 'detail': data });
  document.dispatchEvent(event);
};

export function processNode(node) {
  const elements = node.getElementsByTagName("*");
  return Array.from(elements)
    .filter(element => 
      element.nodeName !== 'SECTION' && 
      element.nodeName !== 'TABLE' && 
      element.getAttribute('name'))
    .map(element => {
      return {
        tag: element.nodeName,
        name: element.getAttribute('name'),
        text: element.textContent.replace(/\s+/g, ' '),
        processed: '',
        count: 0
      };
    });
}

export function processString(searchStr, string) {
  const regexp = new RegExp(searchStr, 'ig'); // case insensitive
  let result = [];
  let count = 0;
  while (result = regexp.exec(string)) {
    count++;
  }
  const processed = string.replace(regexp, `<span class="bg-dark text-white">${searchStr}</span>`);
  return {
    processed,
    count
  };
};

// https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
export function getUrlParams(url) {
  let params = {};
  (url + '?')
    .split('?')[1]
    .split('&')
    .forEach(function (pair) {
      pair = (pair + '=')
        .split('=')
        .map(decodeURIComponent);
      if (pair[0].length) {
        params[pair[0]] = pair[1];
      }
    });
  return params;
};

// export function getOffset(element) {
//   let _x = 0;
//   let _y = 0;
//   while(element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
//       _x += element.offsetLeft - element.scrollLeft;
//       _y += element.offsetTop - element.scrollTop;
//       element = element.offsetParent;
//   }
//   return { top: _y, left: _x };
// }

export function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
};

export function scrollWindow(name) {
  const nodes = document.getElementsByName(name);
  if (nodes[0]) {
    nodes[0].classList.add('bg-yellow', 'text-dark');
    const headerRect = document.getElementById('header').getBoundingClientRect();
    nodes[0].scrollIntoView();
    window.scrollBy(0, -headerRect.height);
  }
};
