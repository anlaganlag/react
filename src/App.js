import React from 'react';

const title = 'React';
const welcome = {
    greeting:"Hey",
    title:"React",
}

const list = [
  {
    title:"React",
    url:"https://reactjs.org/",
    author:"Jordan Walk",
    num_commnets:3,
    points:4,
    objectID:0,
  },
  {
    title:"Redux",
    url:"https://redux.js.org/",
    author:"Dan Abramov,Andrew Clark",
    num_commnets:2,
    points:5,
    objectID:1,
  },
];

function getTitle(title){
  return title;
}
function App() {
  return (
  <div>
    <h1>
      My Coding Exprience: {getTitle("GalFond")}
    </h1>
    
    <label htmlFor="search">Search it: </label>
    <input id="search" type="text" />
    <hr />

    {list.map(
      item=>
      <div key={item.objectID}> 
      <span><a href={item.url}>{item.title} </a></span>
      <span>{item.author} </span>
      <span>{item.num_commnets} </span>
      <span>{item.points}</span>
      </div>
    )}
  </div>
  )
}
export default App;
