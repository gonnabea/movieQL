const Jiwon = {
  name: "Jiwon",
  age: 27,
  gender: "male",
}

const resolvers = {
  Query: {
    person: () => Jiwon,
  },
}

export default resolvers
