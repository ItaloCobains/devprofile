import React from 'react';
import { api } from '../services/api';

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credentials: ICredentials): void;
}

interface Iprops {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FunctionComponent<Iprops> = ({ children }) => {
  const signIn = async ({ email, password }: ICredentials) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      throw new Error(err as string);
    }
  };

  return (
    <AuthContext.Provider value={{ name: 'italo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
