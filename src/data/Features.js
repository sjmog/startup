class Feature {
  constructor({ title, description }) {
    this.id = Feature.incrementId()
    this.title = title
    this.description = description
  }

  static incrementId() {
    return !this.latestId ? this.latestId = 1 : this.latestId++
  }
}

const chat = new Feature({ title: 'Chat', description: 'Allow users to talk with one another.' })
const comments = new Feature({ title: 'Comments' })
const reactions = new Feature({ title: 'Reactions' })

const FEATURES = [chat, comments, reactions]

export default FEATURES
