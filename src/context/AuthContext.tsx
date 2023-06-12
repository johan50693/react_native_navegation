import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce la informacion que tendre aqui 
export interface AuthState {
  isLoggedin: Boolean;
  userName?: String;
  favoriteIcon?: String;
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
}

//  Craer contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any ) => {

  const [authState, dispatch] = useReducer(authReducer,authInitialState);
  return (
    <AuthContext.Provider value={{
      authState,
      signIn: () => {}
    }}>
      {children}
    </AuthContext.Provider>
  )
}
