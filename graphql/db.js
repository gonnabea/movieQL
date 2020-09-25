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

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id)
  return filteredPeople[0]
}
