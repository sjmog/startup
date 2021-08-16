import { useStore } from '../data/Store'
import CardStack from './shared/CardStack'

const Recruitment = () => {
  const sources = useStore('sources')
  
  return (
    <div className="Recruitment">
      <h3 className="header">Hire</h3>
      <div className="Recruitment__Sources">
      { sources.map(({ name, candidates }) => <CardStack key={`recruitment-source-${name}`}>
                                                { candidates.map(({id, name}) => <div key={ `event-${id}` } className="Candidate">{name}</div>) }
                                              </CardStack>) }
      </div>
    </div>
  )
}

export default Recruitment;