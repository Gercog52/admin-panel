export interface Iuser {
  fullName: string
  phone: string
  email: string
  status: 'err'|'success'|'question'
  role: 'автор'|'редактор'|'бильд'|'CMM'
  id: number
}

export default interface IusersReducerState {
  users: Iuser[]
}