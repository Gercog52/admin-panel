import IkabanBoardReducerState from './kabanBoardReduceType'

const startState:IkabanBoardReducerState = {
  author: [
    {
      creator: [1],
      date: '13.02',
      id: 1,
      title: '«Всех не исцелишь. Но попробовать надо»'
    },
    { 
      creator: [1],
      date: '13.02',
      id: 2,
      title: 'В Забайкалье выписали семью переболевшего коронавирусом гражданина Китая'
    },
    {
      creator: [1],
      date: '13.02',
      id: 3,
      title: '«Благодаря самоотверженным действиям сотрудников ФСБ…»'
    }
  ],
  editor: [
    {
      creator: [1,2],
      date: '13.02',
      id: 1,
      title: '«Всех не исцелишь. Но попробовать надо»'
    },
    { 
      creator: [1,2],
      date: '13.02',
      id: 2,
      title: 'В Забайкалье выписали семью переболевшего коронавирусом гражданина Китая'
    },
    {
      creator: [1,2],
      date: '13.02',
      id: 3,
      title: '«Благодаря самоотверженным действиям сотрудников ФСБ…»'
    }
  ],
  buildEditor: [
    {
      creator: [1,2,3],
      date: '13.02',
      id: 1,
      title: '«Всех не исцелишь. Но попробовать надо»'
    },
    { 
      creator: [1,2,3],
      date: '13.02',
      id: 2,
      title: 'В Забайкалье выписали семью переболевшего коронавирусом гражданина Китая'
    },
  ]
}

export default function kabanBoardReducer (state=startState, actions: any):IkabanBoardReducerState {
  return state
}