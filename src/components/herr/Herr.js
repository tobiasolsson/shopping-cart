import React from 'react';

import styles from './Herr.module.css';

import Card from '../card/Card';
import { herr } from '../../inventory';

function Herr({ handleAddToCart }) {
  const menClothing = herr.map((item) => (
    <Card product={item} handleAddToCart={handleAddToCart} />
  ));

  return (
    <div>
      <h1>Herrkläder</h1>
      <div className={styles.container}>{menClothing}</div>
    </div>
  );
}

export default Herr;
