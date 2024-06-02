const Axios = require('axios');
const https = require('https');

require('dotenv').config();

const baseURL = process.env.API_ALLURE_URL;

module.exports = Axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL,
  maxContentLength: Infinity,
  maxBodyLength: Infinity
});
