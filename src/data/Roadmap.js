import features from './Features'

class FeatureGroup {
  constructor({ name, features }) {
    this.id = FeatureGroup.incrementId()
    this.name = name
    this.features = features
  }

  static incrementId() {
    return !this.latestId ? this.latestId = 1 : this.latestId++
  }
}

const social = new FeatureGroup({ name: 'Social', features: [ 1, 2, 3 ] })
const ecommerce = new FeatureGroup({ name: 'eCommerce', features: [ 4, 5 ] })

const roadmap = [social, ecommerce]

const ROADMAP = roadmap.map(featureGroup => { return { ...featureGroup, features: featureGroup.features.map(featureId => {
  const feature = features.find(f => f.id === featureId)

  return feature ? { ...feature } : { title: `No feature #${featureId}` }
}) } })

export default ROADMAP

