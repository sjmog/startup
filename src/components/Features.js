import CardStack from './shared/CardStack'

const Features = () => {
  const features = [ {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        } ]
  return (
    <div className="Features">
      <h3 className="header">Features</h3>
      <CardStack>
        { features.map(({id, text}) => <div key={ `event-${id}` } className="Feature">{text}</div>) }
      </CardStack>
    </div>
  )
}

export default Features;