import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={Signin} />
      <Auth.Screen name="SignUp" component={Signup} />
      <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
      <Auth.Screen name="ResetPassword" component={ResetPassword} />
    </Auth.Navigator>
  );
};
