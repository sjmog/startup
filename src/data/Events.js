class Event {
  constructor({ text, action }) {
    this.id = Event.incrementId()
    this.text = text
    this.action = action
  }

  static incrementId() {
    return !this.latestId ? this.latestId = 1 : this.latestId++
  }
}

const addMoneyEvent = new Event({ text: 'You get money!', action: { type: 'addCash', args: { amount: 200 } } })

const EVENTS = [addMoneyEvent]

export default EVENTS