import { createContext, useState, useContext } from 'react'
import events from './Events'
import people from './People'
import features from './Features'
import roadmap from './Roadmap'

const StoreContext = createContext({})

const Store = ({ children }) => {
  const cash = 150000
  const team = []
  const sources = people.reduce(function(arr, person) {
    const existingSource = arr.find(({ source }) => source === person.source)

    if(existingSource) { existingSource.candidates = [...existingSource.candidates, person] }

    else { arr.push({ name: person.source, candidates: [person] }) }

    return arr
  }, []);

  const kanban = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: []
      },
      {
        id: 2,
        title: 'In progress',
        cards: []
      },
      {
        id: 3,
        title: 'Done',
        cards: []
      }
    ]
  }

  
  const INITIAL_STORE = { events, team, sources, features, kanban, roadmap, cash }

  const EVENT_ACTIONS = {
    addCash: ({amount}) => setState({ ...state, cash: state.cash + amount })
  }

  const [ state, setState ] = useState(INITIAL_STORE)

  const actions = {
    getIncome: () => 0,
    getExpenditure: () => 2440,
    ...EVENT_ACTIONS
  }

  // duplicative gets
  const getState  = (key) => {
    if(state[key] === undefined) throw new Error(`Key ${key} does not exist on the store.`)

    return JSON.parse(JSON.stringify(state[key]))
  }
  const getAction = (action) => (...args) => actions[action](...args)

  return(
    <StoreContext.Provider value={{ getState, getAction }}>
      {children}
    </StoreContext.Provider>
  )
}

const useStore = (key) => {
  const store = useContext(StoreContext)
  return store.getState(key)
}

const useStoreAction = (action, args = {}) => {
  const store = useContext(StoreContext)
  return store.getAction(action, args)
}

export { Store as default, StoreContext, useStore, useStoreAction }