import gql from 'graphql-tag';

export default gql`
  mutation addition($first: Float!, $second: Float!) {
    testMutation(numbers:{ first: $first, second: $second }) {
      result {
        addition
      }
    }
  }
`;
