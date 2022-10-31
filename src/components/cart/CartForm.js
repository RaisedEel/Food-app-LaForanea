import { useSelector } from 'react-redux';
import classes from './CartForm.module.css';

function CartForm() {
  const totalOfCart = useSelector((state) => state.cart.totalOfCart);

  return (
    <form className={classes['cart-form']} action='#'>
      <input
        className={classes['cart-input']}
        type='text'
        placeholder='Dirección'
      />
      <textarea
        className={classes['cart-textarea']}
        rows='2'
        placeholder='Descripción de pedido'
      ></textarea>
      <div className={classes['cart-results']}>
        <p className={classes['cart-field']}>
          Subtotal <span>$ {totalOfCart}</span>
        </p>
        <p className={classes['cart-field']}>
          Servicio de entrega <span className={classes.delivery}>Gratis</span>
        </p>
        <p className={classes['cart-field']}>
          Total <span className={classes.total}>$ {totalOfCart}</span>
        </p>
      </div>

      <button className='btn'>Enviar orden</button>
    </form>
  );
}

export default CartForm;
