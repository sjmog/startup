import { useStore, useStoreAction } from '../data/Store'
import CardStack from './shared/CardStack'

const Event = ({ id, text, action, className }) => {
  const onClickAction = useStoreAction(action.type)

  return(
    <div onClick={() => onClickAction(action.args)} className={`Event ${ className }`}>{text}</div>
  )
}

const Events = () => {
  const events = useStore('events')

  return (
    <div className="Events">
      <h3 className="header">Events</h3>
      <CardStack>
        { events.map(event => <Event key={ `event-${event.id}` } {...event} />) }
      </CardStack>
    </div>
  )
}

export default Events;