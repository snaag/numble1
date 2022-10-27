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
    }
}`;