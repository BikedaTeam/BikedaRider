import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../scenes/auth';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);