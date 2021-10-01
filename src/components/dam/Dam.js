import React from 'react';

import styles from './Dam.module.css';

import Card from '../card/Card';
import { dam } from '../../inventory';

function Dam({ handleAddToCart }) {
  const menClothing = dam.map((item) => (
    <Card product={item} handleAddToCart={handleAddToCart} />
  ));

  return (
    <div>
      <h1>Damkläder</h1>
      <div className={styles.container}>{menClothing}</div>
    </div>
  );
}

export default Dam;
