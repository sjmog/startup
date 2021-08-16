import { createContext, useState, useContext } from 'react'
import events from './Events'

const StoreContext = createContext({})

const Store = ({ children }) => {
  const INITIAL_STORE = {
    events,
    team: [{ id: 1, name: 'Ranulfi' }, { id: 2, name: 'Sophia' }],
    sources: [ { name: 'generation', candidates: [ { id: 1, name: 'dave' } ] }, { name: 'university', candidates: [] } ],
    features: [{id: 1, title: 'Add card', description: 'Add capability to add a card in a column'}],
    kanban: {
      columns: [
        {
          id: 1,
          title: 'Backlog',
          cards: [
            {
              id: 1,
              title: 'Add card',
              description: 'Add capability to add a card in a column'
            },
          ]
        },
        {
          id: 2,
          title: 'In progress',
          cards: [
            {
              id: 2,
              title: 'Drag-n-drop support',
              description: 'Move a card between the columns'
            },
          ]
        },
        {
          id: 3,
          title: 'Done',
          cards: []
        }
      ]
    },
    featureGroups: [{ id: 1, name: 'Social', features: [ { id: 1, name: 'Chat' }, { id: 2, name: 'Comments' }, { id: 3, name: 'Reactions' } ] },
                         { id: 2, name: 'eCommerce', features: [ { id: 4, name: 'Cart' }, { id: 5, name: 'Payments' } ] }],
    cash: 151332
  }

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
  const getState  = (key) => JSON.parse(JSON.stringify(state[key]))
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