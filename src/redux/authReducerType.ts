import {IMyCastomThunk} from './store';

export const AUTH = 'AUTH'
export const UN_AUTH = 'UN_AUTH'

export interface Iauth {
  type: typeof AUTH
}
export interface IunAuth {
  type: typeof UN_AUTH
}

export type IauthReducerActions = Iauth | IunAuth
export default interface IauthReducerState {
  isAuth: boolean
}
export type IauthThunk<R> = IMyCastomThunk<R,IauthReducerActions>
