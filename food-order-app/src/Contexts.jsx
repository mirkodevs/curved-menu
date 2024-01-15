import { createContext, useContext } from 'react';
import getAvailableMeals from './https';
import { useReducer, useState, useEffect } from 'react';

const AvailableMealsContext = createContext()
const CartContext = createContext();
const CartContextDispatch = createContext()

export function useAvailableMeals() {
  return useContext(AvailableMealsContext)
};
export function useCart() {
  return useContext(CartContext)
}
export function useCartDispatch() {
  return useContext(CartContextDispatch)
}
function MyProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { orders: [], total: 0 })
  const [availableMeals, setAvailableMeals] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {

    async function getMeals() {
      setIsFetching(true)
      let fetchedMeals = []
      try {
        fetchedMeals = await getAvailableMeals()
      } catch (error) {
        setErrorMessage(error.message || "Errore sconosciuto")
      } finally {
        setIsFetching(false)
      }
      setAvailableMeals(fetchedMeals)
      setIsFetching(false)
    }

    getMeals()

  }, [])

  function cartReducer(cart, action) {
    switch (action.type) {
      case 'added': {

        action.orderMeal.quantity = 0;
        action.orderMeal.quantity = action.orderMeal.quantity + 1
        action.orderMeal.isSelected;

        return {
          orders: [...cart.orders, action.orderMeal],
          total: cart.total + +action.orderMeal.price

        };

      }
      case 'ADDQUANTIY': {
        action.orderMeal.quantity = action.orderMeal.quantity + 1
        return {
          orders: [...cart.orders],
          total: cart.total + +action.orderMeal.price

        };

      }
      case 'REMOVEQUANTITY': {
        let price = cart.total - +action.orderMeal.price
        if (action.orderMeal.quantity === 1) {
          const nuovoArray = cart.orders.filter(oggetto => oggetto.name !== action.orderMeal.name);

          if (price < 0) {
            price = 0;
          }
          return {
            orders: [...nuovoArray],
            total: price

          }

        }
        action.orderMeal.quantity = action.orderMeal.quantity - 1

        return {
          orders: [...cart.orders],
          total: price

        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  return (
    <AvailableMealsContext.Provider value={{ meals: availableMeals, fetchingState: isFetching, errorMessage: errorMessage }} >
      <CartContext.Provider value={cart}>
        <CartContextDispatch.Provider value={dispatch}>
          {children}
        </CartContextDispatch.Provider>
      </CartContext.Provider>
    </AvailableMealsContext.Provider>
  );
}
export default MyProvider;