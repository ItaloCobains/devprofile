import React from 'react';
import { Home } from './src/pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { Signin } from './src/pages/Signin';

SplashScreen.preventAutoHideAsync();

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
};

export default App;
