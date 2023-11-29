import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
        _id
        username
        savedBooks {
            authors
            description
            title
            bookId
            image
            link
        }
    }
}`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        username
    }
}`;