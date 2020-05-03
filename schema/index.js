const graphql = require("graphql");
const Phone = require("../models/Phones");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const PhoneType = new GraphQLObjectType({
  name: "Phone",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    number: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addPhone: {
      type: PhoneType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        number: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve: (parent, { name, number, description }) => {
        const instance = new Phone({
          name,
          number,
          description,
        });
        return instance.save();
      },
    },
    deletePhone: {
      type: PhoneType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, { id }) => {
        return Phone.findByIdAndDelete(id);
      },
    },
    updatePhone: {
      type: PhoneType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        number: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve: (parent, { id, name, number, description }) => {
        return Phone.findByIdAndUpdate(
          id,
          { name, number, description },
          { new: true }
        );
      },
    },
  }),
});

//Корневой запрос
const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    phone: {
      type: PhoneType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, { id }) => {
        return Phone.findById(id);
      },
    },
    phones: {
      type: new GraphQLList(PhoneType),
      resolve: () => {
        return Phone.find();
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
