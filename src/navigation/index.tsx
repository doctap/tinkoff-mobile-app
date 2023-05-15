import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks';
import { Auth, Home, More, Payments, Profile, Services, Support } from '../components';

const Stack = createNativeStackNavigator();

export const Navigation = () => {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user
          ? <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Payments' component={Payments} />
            <Stack.Screen name='Services' component={Services} />
            <Stack.Screen name='Support' component={Support} />
            <Stack.Screen name='More' component={More} />
          </>
          : <Stack.Screen name='Auth' component={Auth} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
