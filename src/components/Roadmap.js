import { useStore } from '../data/Store'
import { Children, cloneElement } from 'react'

const RoadmapItem = ({ children }) => {
  return(
    <div className="RoadmapItem">
      { Children.map(children, child => cloneElement(child, { className: `${child.props.className} RoadmapItem__Feature` })) }
    </div>
  )
}

const Roadmap = () => {
  const featureGroups = useStore('roadmap')
  
  return (
    <div className="Roadmap">
      <h3 className="header">Roadmap</h3>
      <div className="Roadmap__Items">
      { featureGroups.map(({ id, name, features }) => <RoadmapItem key={`roadmap-item-${id}`}>
                                                        <h4 className="subheader">{name}</h4>
                                                        { features.map(({ id, title }) => <div  key={`roadmap-feature-${id}`}>{title}</div>) }
                                                      </RoadmapItem>) }
      </div>
    </div>
  )
}

export default Roadmap;