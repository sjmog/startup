import { useStore } from '../data/Store'
import CardStack from './shared/CardStack'

const Features = () => {
  const features = useStore('features')

  return (
    <div className="Features">
      <h3 className="header">Features</h3>
      <CardStack>
        { features.map(({id, title, description}) => <div key={ `event-${id}` } className="Feature">{title} {description}</div>) }
      </CardStack>
    </div>
  )
}

export default Features;