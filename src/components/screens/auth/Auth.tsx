import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { styleWrapper } from '../../../styles/styles';
import { useAuth } from '../../../hooks';
import { ButtonAction, Field, Spinner } from '../..';
import { YellowActionButton, ColorGrey800 } from '../../../themes';

interface IData {
  email: string
  password: string
}

export const Auth = () => {
  const [data, setData] = useState({} as IData)
  const { isLoading, login, register } = useAuth();
  const [isReg, setIsReg] = useState(false);

  const authHandler = async () => {
    const { email, password } = data;

    isReg
      ? await register(email, password)
      : await login(email, password);

    setData({} as IData);
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.auth}>
        <View style={styles.form}>
          <Text style={styles.title}>
            {isReg ? 'Sign Up' : 'Sign In'}
          </Text>

          {isLoading
            ? <Spinner />
            : <>
              <View style={styles.fields}>
                <Field
                  onChange={email => setData({ ...data, email })}
                  placeholder='email'
                  value={data.email}
                />
                <Field
                  onChange={password => setData({ ...data, password })}
                  placeholder='password'
                  value={data.password}
                  isSecure
                />
              </View>

              <ButtonAction
                colors={YellowActionButton}
                name={`Let's go`}
                onPress={() => { authHandler(); }}
              />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={styles.pressable}>
                  {!isReg ? 'Register' : 'Login'}
                </Text>
              </Pressable>
            </>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  auth: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  form: {
    width: '75%'
  },
  title: {
    textAlign: 'center',
    color: ColorGrey800,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20
  },
  fields: {
    height: 85,
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  pressable: {
    color: ColorGrey800,
    opacity: 30,
    textAlign: 'right',
    fontSize: 14,
    marginTop: 10
  },
  ...styleWrapper
});
