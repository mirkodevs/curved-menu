import { useCartDispatch } from "../Contexts"
export default function OneCartMeal({ oneMeal }) {


  const dispatchCart = useCartDispatch()
  function handleAdd() {
    dispatchCart({ type: "ADDQUANTIY", orderMeal: oneMeal })

  }
  function handleRemove() {
    dispatchCart({ type: "REMOVEQUANTITY", orderMeal: oneMeal })

  }
  return (
    <li className="cart-item">
      {oneMeal.name}
      <div className="cart-item-actions">
        <button onClick={handleAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg></button>
        {oneMeal.quantity}
        <button onClick={handleRemove}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14z" /></svg>
        </button>
      </div>
    </li>

  )

}