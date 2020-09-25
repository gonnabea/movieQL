import { people, getById } from "./db"

const resolvers = {
  Query: {
    people: () => people,
    person: () => getById("1"),
  },
}

export default resolvers
