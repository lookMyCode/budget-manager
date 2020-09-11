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
  categories: ['Jedzenie', 'Zdrowie', 'Samochód'],
  items: [
    {
      id: 'qwd5dgdfgd4df6',
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
      id: 'fdasaasd',
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
    }
  ]
}

export default function expensesReducer(state = initialState, action: any) {
  return state;
}