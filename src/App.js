import React from 'react';

function Food({ favorite }) { // == property.fav
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
  );
}

export default App;
