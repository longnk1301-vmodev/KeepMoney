import MockService from './MockService';
import {getAppEnv, getEnvConfig} from '../utils/env';
import {replaceDevUrl} from '../utils/utils';

const services = {
  mockService: 'mockService',
};
const getServicesMap = () => {
  const envConfig = getEnvConfig();

  return {
    [services.mockService]: () => {
      return MockService.bind(null, replaceDevUrl(envConfig.EXAMPLE));
    },
  };
};

let servicesMap = null;

const serviceInstances = {};

class ServiceLocator {
  static getService(serviceName) {
    let instance = serviceInstances[serviceName];

    if (!servicesMap && serviceName !== services.audioService) {
      servicesMap = getServicesMap();
    }

    if (!instance) {
      const serviceClass = servicesMap[serviceName]([getAppEnv()]);
      instance = new serviceClass();
      serviceInstances[serviceName] = instance;
    }

    return instance;
  }
}

export default ServiceLocator;
export {ServiceLocator, services};
