const typeDefs = `{
    type Actor {
        id: Int,
        name: String,
        birthday: String,
        country: String
    }
    type Director {
        id: Int,
        name: String,
        birthday: String,
        country: String
    }
    type Movie {
      title: String,
      year: String,
      rating: String,
      actors: [Actor],
      directors [Director]
    }
  }`;

module.exports = typeDefs;
