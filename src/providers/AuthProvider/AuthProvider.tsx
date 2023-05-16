import { User, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState, createContext, useMemo, useEffect, Children } from 'react';
import { Alert } from 'react-native';
import { auth, db, login, logout, register } from '../../firebase';

interface IContext {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => void
  register: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext<IContext>({} as IContext);

interface IAuthProvider {
  children: React.ReactNode
}

export const AuthProvider = (prop: IAuthProvider) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name'
      })
    } catch (error: any) {
      Alert.alert('Error registration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Error login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Error login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user ?? null);
      setIsLoadingInitial(false);
    })
  }, []);


  const value = useMemo(() => ({
    user,
    isLoading,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler
  }), [user, isLoading]);

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && prop.children}
    </AuthContext.Provider>
  );
};