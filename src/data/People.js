class Person {
  constructor({ name, source }) {
    this.id = Person.incrementId()
    this.name = name
    this.source = source
  }

  static incrementId() {
    return !this.latestId ? this.latestId = 1 : this.latestId++
  }
}

const dave = new Person({ name: 'Dave', source: 'University' })

const PEOPLE = [dave]

export default PEOPLE