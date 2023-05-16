import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { styleWrapper } from '../../../styles';
import { useAuth } from '../../../hooks';
import { ButtonAction, Field, Spinner } from '../..';
import { ButtonActionColors } from '../../../themes';

interface IData {
  email: string
  password: string
}

export const Auth = () => {
  const [data, setData] = useState({} as IData)
  const { isLoading } = useAuth();
  const [isReg, setIsReg] = useState(false);

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
                colors={ButtonActionColors}
                name={`Let's go`}
                onPress={() => 0}
              />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={styles.pressable}>
                  {isReg ? 'Register' : 'Login'}
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
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 25
  },
  fields: {
    height: 85,
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  pressable: {
    color: 'grey',
    opacity: 30,
    textAlign: 'right',
    fontSize: 14
  },
  ...styleWrapper
});
