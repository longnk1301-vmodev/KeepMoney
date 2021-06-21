import axios from 'axios';

let _token = '';

const REQUEST_TIMEOUT = 15000;

function instance(baseUrl = '', headers = {}) {
  return axios.create({
    baseURL: baseUrl,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    validateStatus: status =>
      (status >= 200 && status < 300) ||
      status === 400 ||
      status === 403 ||
      status === 404,
  });
}

let _onTokenChanged = null;

class Request {
  constructor(baseUrl = '', headers = {}) {
    console.log('BASE_URL: ', baseUrl);

    this.instance = instance.bind(this, baseUrl, headers);
    this.baseURL = baseUrl;
  }

  handleRequest(response) {
    return response
      .then(res => {
        if (res.status !== 200) {
          console.log('Request::error details: ', res);
        }

        return res.data;
      })
      .catch(error => {
        console.log('Request::error details: ', {error});

        return error.response.data;
      });
  }

  get(url, data, headers) {
    console.log('GET');
    console.log('BASE_URL: ', this.baseURL);
    console.log('URL: ', url);
    console.log('Data: ', data);

    let _url = url;

    return this.handleRequest(this.instance().get(_url, headers));
  }

  post(url, data, headers) {
    console.log('POST');
    console.log('BASE_URL: ', this.baseURL);
    console.log('URL: ', url);
    console.log('Data: ', data);

    return this.handleRequest(this.instance().post(url, data, headers));
  }

  put(url, data) {
    console.log('PUT');
    console.log('BASE_URL: ', this.baseURL);
    console.log('URL: ', url);
    console.log('Data: ', data);

    return this.handleRequest(this.instance().put(url, data));
  }

  delete(url) {
    console.log('DELETE');
    console.log('BASE_URL: ', this.baseURL);
    console.log('URL: ', url);

    return this.handleRequest(this.instance().delete(url));
  }

  updateToken(token) {
    _token = token;
    if (_onTokenChanged) {
      _onTokenChanged(_token);
    }
  }

  onTokenChanged(fn) {
    _onTokenChanged = fn;
  }
}

export default Request;
