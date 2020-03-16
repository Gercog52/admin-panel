import IusersReducerState from "./usersReducerType";

const startState: IusersReducerState = {
  users: [
    {
      email: 'zayka@mail.ru',
      fullName: 'Aнатолий Одуванчиков',
      phone: '+79999999999',
      status: 'success',
      role: 'автор',
      id: 1
    },
    {
      email: 'zayka@mail.ru',
      fullName: 'Aнатолий Одуванчиков',
      phone: '+79999999999',
      status: 'success',
      role: 'редактор',
      id: 4
    },
    {
      email: 'zayka@mail.ru',
      fullName: 'Aнатолий Одуванчиков',
      phone: '+79999999999',
      status: 'success',
      role: 'бильд',
      id: 5
    },
    {
      email: 'zayka@mail.ru',
      fullName: 'Aнатолий Одуванчиков',
      phone: '+79999999999',
      status: 'success',
      role: 'CMM',
      id: 6
    }
  ]
}

export default function usersReducer (state=startState,actions: any):IusersReducerState {
  return state
}