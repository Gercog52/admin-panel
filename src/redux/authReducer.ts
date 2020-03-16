import IauthReducerState, { 
  Iauth,
  AUTH,
  UN_AUTH,
  IunAuth,
  IauthThunk,
  IauthReducerActions
} from "./authReducerType"

const auth = (): Iauth => {
  return {
    type: AUTH
  }
}
const unAuth = (): IunAuth => {
  return {
    type: UN_AUTH
  }
}
export const authThunk = ():IauthThunk<void> => (dispatch) => {
  // тут запрос и авторицазия
  dispatch(auth())
}
export const unAuthThunk = ():IauthThunk<void> => (disoatch) => {
  // тут запрос и выход
  disoatch(unAuth());
}

const startState: IauthReducerState = {
  isAuth: false
}

export default function authReducer (state=startState, actions: IauthReducerActions):IauthReducerState {
  switch (actions.type) {
    case AUTH:
      return {
        ...state,
        isAuth: true
      }
    case UN_AUTH: {
      return {
        ...state,
        isAuth: false
      }
    }
    default:
      break;
  }
  return state
}