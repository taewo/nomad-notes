export const defaults = {
    notes: [
        {
            __typename: "Note",
            id: 1,
            title: "First",
            content: "Second"
        }
    ]
};
export const typeDefs = [
    `
    schema {
        query: Query
        mutation: Mutation
    }
    type Query {
        notes: [Note]!
        note(id: Int!): Note
    }
    type Mutation{
        createNote(title: String!, content: String!): Note
        editNote(id: String!, title: String!, content: String!): Note
    }
    type Note {
        id: Int!
        title: String!
        content: String!
    }
    `
];
export const resolvers = {
    Query: {
        // notes: (_, variables, { getCachekey }) => {
        notes: (_, variables, context) => {
            console.log(variables);
            return null;
            // const id = getCachekey({__typename: "Note", id: variables.id});
            // console.log("id", id);
            // return null
        }
    }
};