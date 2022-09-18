import { gql } from 'apollo-server';

export const GQLTypeDefinitions = gql`
    type Person {
        name: String
        age: Int
    }

    type Query {
        people: [Person]
    }
`;