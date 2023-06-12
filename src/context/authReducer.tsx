import { AuthState } from "./AuthContext";


type AuthAction = 
  | { type: 'signIn'}
  | { type: 'changeFavoriteIcon', payload: string};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    
    case 'signIn':
      return  {
        ...state,
        isLoggedin: true,
        userName: 'no-username-yet'
      }

    case 'changeFavoriteIcon':
      return  {
        ...state,
        favoriteIcon: action.payload
      }
  
    default:
      return state;
  }
}