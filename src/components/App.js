import { useState } from 'react'

import Overlay from './shared/Overlay'

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
  const [viewedCard, setViewedCard] = useState(null)

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

          <a className="button" onClick={() => setViewedCard(!viewedCard)}>End turn</a>
        </div>

        { viewedCard && <Overlay onClick={() => setViewedCard(null)} /> }
      </Store>
    </div>
  )
}

export default App
