import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


const foo = e=>e;
export default function App() {
  return (
    <div>
      <h1>Hi {foo("Best of Best Pro")}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />

      {list.map(e => <div>{e.title}</div>)}

    </div>
  )
}
