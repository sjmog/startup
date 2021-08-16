import { useStore } from '../data/Store'
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'

const Kanban = () => {
  const kanban = useStore('kanban')

  return (
    <div className="Kanban">
      <Board initialBoard={kanban} />
    </div>
  )
}

export default Kanban;
