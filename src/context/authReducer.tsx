import { AuthState } from "./AuthContext";


type AuthAction = 
  | { type: 'signIn'}
  | { type: 'logout'}
  | { type: 'changeFavoriteIcon', payload: string}
  | { type: 'changeUserName', payload: string};

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
    
      case 'changeUserName':
      return  {
        ...state,
        userName: action.payload
      }

      case 'logout':
        return  {
          ...state,
          isLoggedin: false,
          userName: undefined,
          favoriteIcon: undefined
        }
  
    default:
      return state;
  }
}