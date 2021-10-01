import React from 'react';

import styles from './Utrustning.module.css';

import Card from '../card/Card';
import { utrustning } from '../../inventory';

function Utrustning({ handleAddToCart }) {
  const menClothing = utrustning.map((item) => (
    <Card product={item} handleAddToCart={handleAddToCart} />
  ));

  return (
    <div>
      <h1>Utrustning</h1>
      <div className={styles.container}>{menClothing}</div>
    </div>
  );
}

export default Utrustning;
