const { UserList, MovieList, ToDoList } = require("../FakeData");
const _ = require("lodash");

const todos = [];

const getUniqueId = () => Math.floor(Math.random() * 100000);

const resolvers = {
  Query: {
    //User Resolvers
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      // UserList.filter((item) => item === id);
      return user;
    },

    //Movie Resolvers
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },

    //Todo List

    allTodoList: () => {
      return ToDoList;
    },

    getUserTodo: (parent, args) => {
      const userId = args.userId;
      return todos.filter((todo) => todo.userId === userId);
    },
  },

  User: {
    favouriteMovies: () => {
      return _.filter(MovieList, (movie) => movie.yearOfPublication <= 2015);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id == id) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },

    updateTodoList: (parent, args) => {
      const { userId, title } = args.input;
      todos.push({ id: getUniqueId(), title, userId, status: 'PENDING' });
      return todos.filter((todo) => todo.userId === userId);
    },
  },
};
module.exports = { resolvers };
