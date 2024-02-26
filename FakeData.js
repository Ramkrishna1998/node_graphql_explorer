const UserList = [
  {
    id: 1,
    name: "Ram",
    username: "Bhatt",
    age: 20,
    nationality: "INDIA",
    friends: [
      {
        name: "Vishal",
        username: "Patel",
        age: 27,
      },
      {
        name: "Mayur",
        username: "Agravat",
        age: 18,
      },
    ],
  },
  {
    id: 2,
    name: "Vishal",
    username: "Patel",
    age: 27,
    nationality: "CANAD",
    friends: [
      {
        name: "Mayur",
        username: "Agravat",
        age: 18,
      },
    ],
  },
  {
    id: 3,
    name: "Mayur",
    username: "Agravat",
    age: 18,
    nationality: "USA",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avenger",
    yearOfPublication: 2004,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "iron Man",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Bat man",
    yearOfPublication: 2035,
    isInTheaters: false,
  },
];
const ToDoList = [
  {
    id: 1,
    userId: "abc",
    list: [
      {
        title: "Mono Repo",
        status: "PENDING",
      },
      {
        title: "Next.js",
        status: "PENDING",
      },
    ],
  },
  {
    id: 2,
    userId: "test@gmail.com",
    list: [
      {
        title: "Mono Repo",
        status: "COMPLETED",
      },
      {
        title: "Next.js",
        status: "COMPLETED",
      },
    ],
  },
];

module.exports = { UserList, MovieList, ToDoList };
