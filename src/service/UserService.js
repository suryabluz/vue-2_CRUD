import axios from 'axios'
export class UserService {
  static serviceURL = 'http://localhost:3001';
  // static serviceURL = 'http://192.168.1.10:9001';

  static getAllUsers() {
    let dataURL = `${this.serviceURL}/api/users/`;
    return axios.get(dataURL);
  }

  static getUser(id) {
    let dataURL = `${this.serviceURL}/api/users/${id}`;
    return axios.get(dataURL);
  }
  static updateUser(id, data) {
    let dataURL = `${this.serviceURL}/api/users/${id}`;
    return axios.put(dataURL, data);
  }
  static createNewUser(data) {
    let dataURL = `${this.serviceURL}/api/users/`;
    return axios.post(dataURL, data);
  }
  static deleteUser(id) {
    let dataURL = `${this.serviceURL}/api/users/${id}`;
    return axios.delete(dataURL);
  }
  static register(data) {
    let dataURL = `${this.serviceURL}/api/register`;
    return axios.post(dataURL, data);
  }
}