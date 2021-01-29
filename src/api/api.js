import Http from "@/api/utils/http";
import Fetcher from "./utils/fetcher";

const baseURL = "https://jsonplaceholder.typicode.com";
const config = {};
export default class API {
  constructor(token) {
    this.init(token);
    this.extendFetchers(this.http);
  }

  init(token) {
    if (token) {
      this.http = new Http({
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      // without token
      console.log("api instance initial without token.");
      this.http = new Http(config);
    }
  }

  extendFetchers() {
    this.Posts = new Fetcher(this.http, `${baseURL}/posts`);
  }
}
