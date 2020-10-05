import { getMovies, getMovieById, getPersonById, getPeople } from "./db"

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getPersonById(id), // arguments 안의 id

    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => console.log("will be added somthing here"),
  },
}

export default resolvers
