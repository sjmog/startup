import CardStack from './shared/CardStack'

const Recruitment = () => {
  const sources = [ { name: 'generation', candidates: [ { id: 1, name: 'dave' } ] }, { name: 'university', candidates: [] } ]
  return (
    <div className="Recruitment">
      <h3 className="header">Recruitment</h3>
      <div className="Recruitment__Sources">
      { sources.map(({ name, candidates }) => <CardStack key={`recruitment-source-${name}`}>
                                                { candidates.map(({id, name}) => <div key={ `event-${id}` } className="Candidate">{name}</div>) }
                                              </CardStack>) }
      </div>
    </div>
  )
}

export default Recruitment;