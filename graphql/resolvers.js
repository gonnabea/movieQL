import { people, getById } from "./db"

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id), // arguments 안의 id
  },
}

export default resolvers
