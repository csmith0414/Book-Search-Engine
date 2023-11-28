import gql from 'graphql-tag';

export const QUERY = gql`
{
    User {
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}`;