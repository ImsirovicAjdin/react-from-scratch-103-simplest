# About this React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is [deployed on Netlify](https://fanciful-entremet-8719f2.netlify.app/).

## Learning Concepts covered

1. What is JSX? It's just a bunch of nested `React.createElement()` method calls.

In `App.js`, you have the following JSX code commented out:
```jsx
<div className="App">
    <h1>Hello World!</h1>
</div>
```

Under that code, you have the equivalent syntax written in vanilla JavaScript.
```javascript
React.createElement('div', { className: 'App' },
    React.createElement('h1', null, 'Hello World!'),
)
```

JSX is just "syntactic sugar" that hides that vanilla JavaScrip content.

## Tasks

1. Your task is to add several more `React.createElement()` calls, which would equate to the following structure:
```jsx
<div className="App">
    <h1>Hello World!</h1>
    <h2>Hello again!</h2>
    <h3>Hello yet again!</h3>
    <h4>Once again!</h4>
</div>
```
