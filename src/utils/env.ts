import {config} from '../../enviroments';
import AsyncStorageService from '../services/asyncStorageService';

let appEnv;

export const getAppEnv = () => appEnv;

export const getEnvConfig = () => config.environments[appEnv];

export const loadAppEnv = () =>
  new Promise(async resolve => {
    appEnv = await AsyncStorageService.getAppEnvironment();

    resolve(appEnv);
  });
