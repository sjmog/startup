import { createContext } from 'react'

import Events from './Events'
import Recruitment from './Recruitment'
import Roadmap from './Roadmap'
import Kanban from './Kanban'
import Cash from './Cash'
import Team from './Team'
import OtherPlayers from './OtherPlayers'

import useWindowSize from '../hooks/useWindowSize'

const WindowSizeContext = createContext({ width: window.innerWidth, height: window.innerHeight })

const App = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="App">
      <WindowSizeContext.Provider value={ { width, height } }>
        <div className="Game">
          <Events />
          <Recruitment />
          <Roadmap />
          <Kanban />
          <Team />
          <Cash />
          <OtherPlayers />
        </div>
        <div className="Controls">
          Week

          <a className="button">End turn</a>
        </div>
      </WindowSizeContext.Provider>
    </div>
  )
}

export { App as default, WindowSizeContext }
