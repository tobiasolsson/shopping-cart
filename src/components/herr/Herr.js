import React from 'react';

import Card from '../card/Card';
import { herr } from '../../inventory';

function Herr({ handleAddToCart }) {
  const menClothing = herr.map((item) => (
    <Card product={item} handleAddToCart={handleAddToCart} />
  ));

  return (
    <div>
      <h1>Herr</h1>
      <div>{menClothing}</div>
    </div>
  );
}

export default Herr;
