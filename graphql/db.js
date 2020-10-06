export const people = [
  {
    id: "1",
    name: "Jiwon",
    age: 27,
    gender: "male",
  },
  {
    id: "2",
    name: "Nico",
    age: 27,
    gender: "male",
  },
  {
    id: "3",
    name: "Lynn",
    age: 26,
    gender: "female",
  },
  {
    id: "4",
    name: "Larry",
    age: 23,
    gender: "male",
  },
]

export const movies = [
  {
    id: "1",
    name: "kingsman",
    score: 95,
  },
  {
    id: "2",
    name: "oldboy",
    score: 98,
  },
  {
    id: "3",
    name: "resident evil",
    score: 90,
  },
  {
    id: "4",
    name: "moana",
    score: 95,
  },
]

export const getPeople = () => people

export const getPersonById = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id)
  return filteredPeople[0]
}
export const getMovies = () => movies

export const getMovieById = (id) => {
  const filteredPeople = movies.filter((movie) => String(id) === movie.id)
  return filteredPeople[0]
}

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== String(id))
  if (movies.length > cleanMovies.length) {
    // 삭제된 것이 있는 경우
    movies = cleanMovies
    return true
  } else {
    return false
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  }
  movies.push(newMovie)
  return newMovie
}
