const { UserList, MovieList } = require("../FakeData");
// const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    }
  }
}

module.exports = {
    resolvers
}