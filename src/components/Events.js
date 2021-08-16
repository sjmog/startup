import { useStore } from '../data/Store'
import CardStack from './shared/CardStack'

const Events = () => {
  const events = useStore('events')

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