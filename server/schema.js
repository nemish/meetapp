import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { users, meetings } from "./mock-data";

const typeDefs = `
  type User {
    id: String
    name: String
    meetings: [Meeting]
  }

  type Meeting {
    id: String
    name: String
    description: String
    creator: User
    members: [User]
    location: String
    possibleLocations: [String]
  }

  type Query {
    currentUser: User
    user(id: String!): User
    users: [User]
    meeting(id: String!): Meeting
    meetings: [Meeting]
  }
`;

const resolvers = {
  Query: {
    currentUser(root, args, context, info) {
      return users[0];
    },
    user(root, args, context, info) {
      return users.filter((user) => user.id === args.id)[0];
    },
    users() {
      return users;
    },
    meeting(root, args, context, info) {
      return meetings.filter((meeting) => meeting.id === args.id)[0];
    },
    meetings() {
      return meetings;
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });
