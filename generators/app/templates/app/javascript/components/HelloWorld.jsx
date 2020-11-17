import React, { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { useMutation } from '@apollo/react-hooks';

import ADDITION from './mutations/addition';

const HelloWorld = (props) => {
  const [addition, { loading, data }] = useMutation(ADDITION);

  useEffect(() => {
    addition({ variables: {
      first: Math.floor(Math.random() * 10),
      second: Math.floor(Math.random() * 10)
    } })
  }, []);

  return (
    <App>
      <div>Greetings: {props.greeting}</div>
      <div>
        Your random number is: { loading ? 'loading...' : data && data.testMutation.result.addition }
      </div>
      <Button onClick={() => addition({
        variables: {
          first: Math.floor(Math.random() * 10),
          second: Math.floor(Math.random() * 10)
        }
      })}>
        Reload
      </Button>
    </App>
  );
};

export default (props) => <App><HelloWorld {...props} /></App>;
