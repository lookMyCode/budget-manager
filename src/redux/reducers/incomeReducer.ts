interface ITime {
  y: number,
  m: number,
  d: number,
  h: number,
  min: number
}

interface IItems {
  id: string,
  name: string,
  category: number,
  quota: number,
  time: ITime
}

interface IState {
  categories: Array<string>,
  items?: Array<IItems>
}

const initialState: IState = {
  categories: ['Praca', 'Akcji', 'Stypendja'],
  items: [
    {
      id: 'qwd54df6',
      name: 'Wynagrodzenie',
      category: 0,
      quota: 100,
      time: {
        y: 2020,
        m: 9,
        d: 22,
        h: 12,
        min: 15
      }
    },
    {
      id: 'qwd54dfdadsa6',
      name: 'Wynagrodzenie',
      category: 0,
      quota: 100,
      time: {
        y: 2020,
        m: 9,
        d: 22,
        h: 12,
        min: 15
      }
    },
  ]
}

export default function incomeReducer(state = initialState, action: any) {
  return state;
}