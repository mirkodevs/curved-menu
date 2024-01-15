import { useCart } from "../Contexts";
import OneCartMeal from "./OneCartMeal";
const CartComponent = ({goCheckout}) => {

  const cart = useCart();
console.log(cart)
  return (
    <section className="cart">
      <h2>your cart</h2>
      <ul>
        {cart.orders.map((meal) => {

          return (
           <OneCartMeal key={meal.id} oneMeal={meal}/>
          )
        })
        }

      </ul>
<p className="cart-total">{cart.total.toFixed(2)}</p>
    </section>

  )


}
export default CartComponent