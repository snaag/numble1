import { gql } from '@apollo/client';

export const FETCH_DIARY_LIST = gql`
query FetchBoards($page: Int!) {
    fetchBoards(page: $page) {
        title
        createdAt
        number
    }
}`;

export const FETCH_DIARY_ONE = gql`
query FetchBoard($number: Int!) {
    fetchBoard(number: $number) {
        title
        contents
        createdAt
        number
        writer
    }
}`;

export const CREATE_BOARD = gql`
mutation CreateBoard($writer: String!, $title: String!, $contents: String!) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
        _id
        number
        message
    }
}`;

export const UPDATE_BOARD = gql`
mutation UpdateBoard($number: Int!, $writer: String!, $title: String!, $contents: String!) {
    updateBoard(number: $number, writer: $writer, title: $title, contents: $contents) {
        _id
        number
        message
    }
}`;

export const DELETE_BOARD = gql`
mutation DeleteBoard($number: Int!) {
    deleteBoard(number: $number) {
        _id
        number
        message
    }
}
`;