import { useEffect } from 'react'

import Events from './Events'
import Recruitment from './Recruitment'
import Features from './Features'
import Roadmap from './Roadmap'
import Kanban from './Kanban'
import Cash from './Cash'
import Team from './Team'
import OtherPlayers from './OtherPlayers'

import Store from '../data/Store'

const App = () => {
  return (
    <div className="App">
      <Store>
        <div className="Game">
          <Events />
          <Recruitment />
          <Features />
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
      </Store>
    </div>
  )
}

export default App
