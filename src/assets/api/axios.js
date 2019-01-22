import axios from 'axios';
const qs = require('qs');

const instance = axios.create({
  baseURL: 'http://xxx.com/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const ajax = (url, params) => {
  return new Promise((resolve, reject) => {
    instance({
      url: url,
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      console.log(res);
      if (res.data.success === true) {
        resolve(res.data.data);
      } else {
        throw res;
      }
    }).catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

export default ajax;
