export default class Fetcher {
  constructor(http, endpoint) {
    this.http = http;
    this.endpoint = endpoint;
  }

  create(payload = {}, config = {}) {
    return this.http.post(this.endpoint, payload, config);
  }

  findAll(params = {}, config = {}) {
    return this.http.get(this.endpoint, params, config);
  }

  find(id, params = {}, config = {}) {
    return this.http.get(`${this.endpoint}/${id}`, params, config);
  }

  update(id, params = {}, config = {}) {
    return this.http.patch(
      `${this.endpoint}/${id}`,
      (params = {}),
      (config = {})
    );
  }

  delete(id, config = {}) {
    return this.http.delete(`${this.endpoint}/${id}`, config);
  }
}
