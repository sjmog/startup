import { useState, useEffect } from 'react'

const Overlay = ({ onClick }) => {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])

  const handleClick = () => {
    setShow(false)
    setTimeout(onClick, 500) // or whatever the transition timing is
  }

  return(
    <div className={`Overlay ${show ? 'Overlay--in' : ''}`} onClick={handleClick} />
  )
}

export default Overlay