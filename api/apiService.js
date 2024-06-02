const FormData = require('form-data');
const fs = require('fs');

class ApiService {
  constructor(axios) {
    this.axios = axios;
  }

  async postRequest(url, body = {}) {
    try {
      const {data} = await this.axios.post(url, body);
      return data;
    } catch (error) {
      console.error(error.response);
      return error.response;
    }
  }

  async sendFile(url, name, filePath, fileName) {
    let formData = new FormData();
    formData.append(name, fs.readFileSync(filePath), fileName);
    try {
      const {data} = await this.axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...formData.getHeaders(),
          maxContentLength: Infinity,
          maxBodyLength: Infinity
        },
      });
      return data;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  }

  async getRequest(url) {
    try {
      const {data} = await this.axios.get(`${url}`);
      return data;
    } catch (error) {
      console.error(error.response);
      return error.response;
    }
  }

  async getRequestWithWholeResponse(url) {
    try {
      return this.axios.get(`${url}`);
    } catch (error) {
      console.error(error.response);
      return error.response;
    }
  }

  async putRequest(url, body = {}) {
    try {
      const {data} = await this.axios.put(url, body);
      return data;
    } catch (error) {
      console.error(error.response);
      return error.response;
    }
  }

  async deleteRequest(url, body = {}) {
    try {
      const {data} = await this.axios.delete(url, body);
      return data;
    } catch (error) {
      console.error(error.response);
      return error.response;
    }
  }

  async setAuthToken(token) {
    if (token) {
      this.axios.defaults.headers.common.authorization = `Bearer ${token}`;
    } else {
      delete this.axios.defaults.headers.common.authorization;
    }
  }

  setSessionToken(token) {
    if (token) {
      this.axios.defaults.headers.common.session_id = `${token}`
    } else {
      delete this.axios.defaults.headers.common.session_id
    }
  }

  getAxiosInstance = () => this.axios;
}

module.exports = ApiService;
