import axios from "axios";

export const makeRequest = axios.create({
  baseURL:"http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + "010e9791b867d65c4d29ddb5dd416013376d5113a4b22e3c206d3c9650e58972622fb15c9a8c2e4d1af09af99b7c080c7720d413364433c85e1a21b33b20a8e022bffe04f8c5c84555ab4e641d80f5ec1e44cc75b1b226412c0f8d31f1fb7c81fd5da0ad11723b0a4186d7419a3e2645c08c746e01ba857cdcc62a81fe83f40b",
  },
});