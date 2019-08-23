const typeDefs = ` 
    type Query {
      movies: [Movie] 
    }   
    type Movie {
      id: ID!
      title: String
      year: String
      rating: String   
      actors: [Actor]
      directors: [Director]   
    }    
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
  `;

module.exports = typeDefs;
