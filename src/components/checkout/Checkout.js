import React from 'react';

function Checkout({ shoppingCart }) {
  console.log(shoppingCart);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div>
        <h2>Leveransadress</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="epost">
            E-post:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <label htmlFor="epost">
            Förnamn:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <label htmlFor="epost">
            Efternamn:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <label htmlFor="epost">
            Gatuadress:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <label htmlFor="epost">
            Postnummer:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <label htmlFor="epost">
            Stad:
            <input type="email" name="epost" placeholder="E-post" required />
          </label>
          <button type="submit">Lägg Order</button>
        </form>
      </div>
      <div>
        <h2>Sammanfattning (x artiklar)</h2>
        <div>{/* ShoppingCart här */}</div>
      </div>
    </div>
  );
}

export default Checkout;
