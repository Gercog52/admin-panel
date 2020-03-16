export interface IaticleBoard {
  date: string
  title: string
  id: number
  creator: number[]
}

export default interface IkabanBoardReducerState {
  author: IaticleBoard[]
  editor: IaticleBoard[]
  buildEditor: IaticleBoard[]
}