/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './CartModal.module.css';

// eslint-disable-next-line no-unused-vars
const CartModal = ({ handleClose, show, children }) => {
  // show modal or hide depending on the className:
  const showModal = show
    ? `${styles.modal} ${styles.showModal}`
    : `${styles.modal} ${styles.hideModal}`;

  const showBackrop = show ? styles.backdrop : '';

  return (
    // TODO: Ta bort backdrop div till någon annanstans, eller lös problem med onClick={handleClose} (stänger även när jag klickar på modal)
    <div className={showBackrop}>
      <div className={showModal}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CartModal;
