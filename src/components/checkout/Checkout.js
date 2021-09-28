import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Checkout.module.css';

function Checkout({ shoppingCart, emptyCart }) {
  console.log(shoppingCart);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // Redirect till landing page
    emptyCart();
    history.push('/');
  }

  const articles = shoppingCart.length > 1 ? 'artiklar' : 'artikel';

  const summary = shoppingCart.map((item) => {
    const relevantInfo = Object.keys(item).filter(
      (key) => key === 'title' || key === 'price' || key === 'image',
    );
    const article = relevantInfo.map((key) => {
      if (key === 'image') {
        return <img src={item[key]} alt="" className={styles.cartImage} />;
      }
      if (key === 'title') {
        return <li className={styles.title}>{item[key]}</li>;
      }
      if (key === 'price') {
        return (
          <li className={styles.price}>
            {`${item[key].toLocaleString('se')} kr`}
          </li>
        );
      }
      return <li>{item[key]}</li>;
    });
    return <ul className={styles.itemCart}>{article}</ul>;
  });

  function calculateTotal() {
    const listPrice = shoppingCart.map((item) => item.price);
    const sumTotal = listPrice.reduce(
      (currentSum, currentValue) => currentSum + currentValue,
      0,
    );

    const totalPrice = `${sumTotal.toLocaleString('se')} kr`;

    return totalPrice;
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.orderform}>
        <h2>Leveransadress</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.email} htmlFor="epost">
            E-post:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <div className={styles.name}>
            <label className={styles.firstname} htmlFor="firstName">
              Förnamn:
              <input
                type="text"
                name="firstName"
                placeholder="Förnamn"
                required
              />
            </label>
            <label className={styles.lastname} htmlFor="lastName">
              Efternamn:
              <input
                type="text"
                name="lastName"
                placeholder="Efternamn"
                required
              />
            </label>
          </div>
          <label className={styles.street} htmlFor="street">
            Gatuadress:
            <input
              type="text"
              name="street"
              placeholder="Gatuadress"
              required
            />
          </label>
          <div className={styles.postal}>
            <label className={styles.zip} htmlFor="zip">
              Postnummer:
              <input type="text" name="zip" placeholder="Postnummer" required />
            </label>
            <label className={styles.city} htmlFor="city">
              Stad:
              <input type="text" name="city" placeholder="Stad" required />
            </label>
          </div>
          <button className={styles.submit} type="submit">
            Lägg Order
          </button>
        </form>
      </div>
      <div>
        <h2>
          Sammanfattning ({shoppingCart.length} {articles})
        </h2>
        <div className={styles.summary}>
          {summary}{' '}
          <ul className={styles.totalPrice}>
            <li className={styles.summa}>Summa: </li>
            <li className={styles.total}>{calculateTotal()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
