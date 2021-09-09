import React from 'react';

import { herr } from '../../inventory';

function Herr({ handleAddToCart }) {
  const menClothing = herr.map((item) => {
    const article = Object.keys(item).map((key) => <li>{item[key]}</li>);
    return (
      <ul>
        {article}
        <li>
          <button type="button" onClick={() => handleAddToCart(item)}>
            Lägg i varukorgen
          </button>
        </li>
      </ul>
    );
  });

  return (
    <div>
      <h1>Herr</h1>
      <div>{menClothing}</div>
    </div>
  );
}

export default Herr;
