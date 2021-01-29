import Http from "@/api/utils/http";

const baseURL = "https://example.com";
const config = {};

export default class Auth {
  constructor() {
    this.init();
  }

  init() {
    this.http = new Http(baseURL, config);
  }

  /**
   * Get access token
   *
   * @param {object} payload payload for login
   * @param {string} payload.username username
   * @param {string} payload.password password
   */
  fetchAccessToken(payload = {}) {
    return this.http.post("login", payload);
  }
}
