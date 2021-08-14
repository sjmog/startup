import { useState } from 'react'
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'

const INITIAL_BOARD = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'In progress',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
      ]
    },
    {
      id: 3,
      title: 'Done',
      cards: []
    }
  ]
}

const Kanban = () => {
  const [board, setBoard] = useState(INITIAL_BOARD)

  return (
    <div className="Kanban">
      <h3 className="header">Kanban</h3>
      <Board initialBoard={board} />
    </div>
  )
}

export default Kanban;
