import React from 'react';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id: 2,
    name: "Samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

function Food({ name, picture }) { // == property.fav
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
  )
}

function App() {
  return (
    <div>
      {foodILike.map(dish => ( //renderFood로 대체가능
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
