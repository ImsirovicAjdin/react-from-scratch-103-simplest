import React from 'react';

function App() {
  return (
    // <div className="App">
    //   <h1>Hello World!</h1>
    // </div>
    React.createElement('div', { className: 'App' },
      React.createElement('h1', null, 'Hello World!'),
      React.createElement('h2', null, 'Hello again!'),
      React.createElement('h3', null, 'Hello yet again!'),
      React.createElement('h4', null, 'Once again!'),
    )
  );
}

export default App;
