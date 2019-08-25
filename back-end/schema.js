const typeDefs = ` 
    type Query {
      movies: [Movie] 
      movie(id: Int): Movie
    }   
    type Movie {
      id: Int!
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
