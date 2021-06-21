// import Request from '../utils/request';
import signIn from '../../mocks/signIn';

export default class MockService {
  /**
   * @param {string} url
   */

  constructor() {
    // this.request = new Request();
  }

  async signIn(username: string, password: string) {
    console.log('username', username);
    console.log('password', password);
    return signIn;
  }

  async signUp(username: string, password: string, confirmPassword: string) {
    console.log('username', username);
    console.log('password', password);
    console.log('confirmPassword', confirmPassword);
    return signIn;
  }
}
