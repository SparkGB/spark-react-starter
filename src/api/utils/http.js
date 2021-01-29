import axios from "axios";
import qs from "qs";

import errorCatcher from "./error-catcher";

export default class Http {
  constructor(config = {}) {
    this.$http = axios.create({
      ...config,
    });
  }

  get(url = "", params = {}, config = {}) {
    return this.$http
      .get(url, {
        params: params,
        paramsSerializer: (params) => {
          return qs.stringify(params, { encode: true });
        },
        ...config,
      })
      .then((res) => {
        return res.data;
      })
      .catch(errorCatcher);
  }

  post(url = "", data = {}, config = {}) {
    return this.$http
      .post(url, data, {
        ...config,
      })
      .then((res) => {
        return res.data;
      })
      .catch(errorCatcher);
  }

  patch(url = "", data = {}, config = {}) {
    return this.$http
      .patch(url, data, {
        ...config,
      })
      .then((res) => {
        return res.data;
      })
      .catch(errorCatcher);
  }

  put(url = "", data = {}, config = {}) {
    return this.$http
      .put(url, data, {
        ...config,
      })
      .then((res) => {
        return res.data;
      })
      .catch(errorCatcher);
  }

  delete(url = "", config = {}) {
    return this.$http
      .delete(url, {
        ...config,
      })
      .then((res) => {
        return res.data;
      })
      .catch(errorCatcher);
  }
}
