import React from 'react';

function App() {
  return (
    // <div className="App">
    //   <h1>Hello World!</h1>
    // </div>
    React.createElement('div', { className: 'App' },
      React.createElement('h1', null, 'Hello World!'),
    )
  );
}

export default App;
