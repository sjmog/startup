import { useContext } from 'react'
import { WindowSizeContext } from './App'
import '../stylesheets/components/Events.scss'

const Events = () => {
  const { width, height } = useContext(WindowSizeContext)
  return (
    <div className="Events">
      Events
    </div>
  )
}

export default Events;