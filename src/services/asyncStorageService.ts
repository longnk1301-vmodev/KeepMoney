import AsyncStorage from '@react-native-community/async-storage';
import {asyncStorageKeys} from '../constants/Common';
import {config} from '../../enviroments';

class AsyncStorageService {
  set(key, value) {
    return AsyncStorage.setItem(key, value);
  }

  get(key) {
    return AsyncStorage.getItem(key);
  }

  async getAppEnvironment() {
    const savedEnv = await this.get(asyncStorageKeys.APP_ENV);

    if (!savedEnv) {
      await this.set(asyncStorageKeys.APP_ENV, config.defaultEnvironment);
    }

    return savedEnv || config.defaultEnvironment;
  }

  async setAppEnvironment(env) {
    return await this.set(asyncStorageKeys.APP_ENV, env);
  }
}

export default new AsyncStorageService();
