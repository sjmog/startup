import { Children, cloneElement } from 'react'

const CardStack = ({ children }) => {
  return(
    <div className="CardStack">
      { Children.map(children, child => cloneElement(child, { className: `${child.props.className} Card` })) }
    </div>
  )
}

export default CardStack