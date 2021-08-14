import CardStack from './shared/CardStack'

const Events = () => {
  const events = [ {id: 1, text: "A person says hello."}, {id: 2, text: "Another thing happens."} ]
  return (
    <div className="Events">
      <h3 className="header">Events</h3>
      <CardStack>
        { events.map(({id, text}) => <div key={ `event-${id}` } className="Event">{text}</div>) }
      </CardStack>
    </div>
  )
}

export default Events;