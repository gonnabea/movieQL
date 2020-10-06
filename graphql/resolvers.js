import { getMovies, getMovieById, getPersonById, getPeople, addMovie, deleteMovie } from "./db"

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getPersonById(id), // arguments 안의 id

    movies: () => getMovies(),
    movie: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
}

export default resolvers
