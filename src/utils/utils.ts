import {NativeModules} from 'react-native';
import {ENVS} from '../constants/Common';
import {getAppEnv} from './env';
import parse from 'url-parse';

const replaceDevUrl = urlString => {
  const stringToReplace = 'localhost';
  const appEnv = getAppEnv();

  if (appEnv !== ENVS.LOCAL) {
    return urlString;
  }

  if (!urlString.includes(stringToReplace)) {
    return urlString;
  }

  const parsed = parse(NativeModules.SourceCode.scriptURL);

  return urlString.replace(stringToReplace, parsed.hostname);
};

export {replaceDevUrl};
