import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // test will crashed because when we build the react app, it will include Fib.js and in there will try to fetch to our server, but server is not running at this point, so the test will filed. 
    
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
});
