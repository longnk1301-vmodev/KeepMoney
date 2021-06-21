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
}
