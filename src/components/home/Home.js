import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import OrderModal from '../modal/OrderModal';

import styles from './Home.module.css';

function Home({ location }) {
  const [modal, setModal] = useState(false);

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  useEffect(() => {
    const checkedOut = location.state;
    if (checkedOut) {
      modalOpen();
    }
  }, []);

  return (
    <div>
      <main className={styles.landing}>
        <div className={styles.mainImg}>
          <h2 className={styles.imageText}>Vi har allt för friluftslivet</h2>
        </div>
        <Link to="/herr">
          <div className={styles.herrImg}>
            <h2 className={styles.imageText}>Köp herr kläder</h2>
          </div>
        </Link>
        <Link to="/dam">
          <div className={styles.damImg}>
            <h2 className={styles.imageText}>Köp dam kläder</h2>
          </div>
        </Link>
        <Link to="/utrustning">
          <div className={styles.utrImg}>
            <h2 className={styles.imageText}>Köp annan utrustning</h2>
          </div>
        </Link>
      </main>
      <OrderModal show={modal} handleClose={modalClose}>
        Tack för din order!
      </OrderModal>
    </div>
  );
}

export default Home;
