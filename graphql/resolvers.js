import { getMovies, getMovieById, getPersonById, getPeople, addMovie } from "./db"

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getPersonById(id), // arguments 안의 id

    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
}

export default resolvers
