const typeDefs = ` 
    type Query {
      movies: [Movie] 
      movie(id: Int): Movie
    }   
    type Mutation {
      createUser(username: String, password: String): UserAuthPayload
      login(username: String, password: String): UserAuthPayload
    }
    type UserAuthPayload {
      user: User!
      token: String
    }
    type User {
      id: Int,
      name: String
    }
    type Movie {
      id: Int!
      title: String
      year: String
      rating: String   
      scoutbase_rating: String
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
