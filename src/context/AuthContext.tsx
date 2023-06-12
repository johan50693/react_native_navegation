import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce la informacion que tendre aqui 
export interface AuthState {
  isLoggedin: boolean;
  userName?: string;
  favoriteIcon?: string;
}

//  Estado inicial
export const authInitialState: AuthState = {
  isLoggedin: false,
  userName: undefined,
  favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce y que expone el context 
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUserName: (userName: string) => void;
}

//  Craer contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any ) => {

  const [authState, dispatch] = useReducer(authReducer,authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn'});
  }
  
  const logout = () => {
    dispatch({ type: 'logout'});
  }

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavoriteIcon', payload: iconName});
  }
  
  const changeUserName = (userName: string) => {
    dispatch({ type: 'changeUserName', payload: userName});
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavoriteIcon,
      logout,
      changeUserName,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
