import React, {forwardRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';

export default forwardRef((props, ref) => (
  <NavigationContainer {...props} ref={ref}>
    <HomeNavigator />
  </NavigationContainer>
));
