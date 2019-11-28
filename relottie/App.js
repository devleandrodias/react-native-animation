import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

import loading from './animate-loading.json';

export default function relottie() {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie resizeMode="contain" source={loading} autoPlay loop />
    </SafeAreaView>
  );
}
