import axios from 'axios';
import dataConfig from '../config/config.json'

export default class Request {

  static async get(url, params) {
    try {
      return await axios.get(dataConfig.baseUrl + url, params);
    }
    catch (e) {
      console.error(e);
    }
  }

  static async put(url, params) {
    try {
      return await axios.put(dataConfig.baseUrl + url, params);
    }
    catch (e) {
      console.error(e);
    }
  }

  static async post(url, params) {
    try {
      return await axios.post(dataConfig.baseUrl + url, params);
    }
    catch (e) {
      console.error(e);
    }
  }

  static async delete(url, params) {
    try {
      return await axios.delete(dataConfig.baseUrl + url, params);
    }
    catch (e) {
      console.error(e);
    }
  }
}
