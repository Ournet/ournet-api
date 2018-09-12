
import weather from './weather';
import places from './places';
import holidays from './holidays';
import news from './news';
const GraphQLJsonType = require('graphql-type-json');

const rootTypes = `
scalar JSON

type Query {
    ping: String!
}
type Mutation {
    add(n1: Int!, n2:Int!): Int!
}
`

const rootResolvers = {
    Query: {
        ping: () => 'pong'
    },
    Mutation: {
        add: (_: any, { n1, n2 }: { n1: number, n2: number }) => n1 + n2
    },
};

export const typedefs = [
    rootTypes,
    holidays.typedefs,
    weather.typedefs,
    places.typedefs,
    news.typedefs,
].join('\n');

export const resolvers = {
    Query: {
        ...rootResolvers.Query,
        ...holidays.resolvers.Query,
        ...weather.resolvers.Query,
        ...places.resolvers.Query,
        ...news.resolvers.Query,
    },
    Place: places.resolvers.Place,
    Mutation: { ...rootResolvers.Mutation },
    JSON: GraphQLJsonType,
};
