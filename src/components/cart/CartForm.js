import classes from './CartForm.module.css';

function CartForm() {
  return (
    <form className={classes['cart-form']} action='#'>
      <input type='text' />
      <textarea rows='2'></textarea>
      <div>
        <p>Subtotal</p>
        <p>Servicio de entrega</p>
        <p>Total</p>
      </div>

      <button className='btn'>Enviar orden</button>
    </form>
  );
}

export default CartForm;
