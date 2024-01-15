const MealItem = ({ id,name, image, price, description, addToCart }) => {
function handleClick() {
  addToCart()
}
  return (
    <li id = {id} className='meal-item'>
      <article>
        <img src={'http://localhost:3000/' + image}></img>
        <div>
          <h3>{name}</h3>

          <span className='meal-item-price'>{price}</span>
          <p className='meal-item-description'>{description}</p>
          <p className='meal-item-actions'>
            <button onClick={handleClick} className='button'>ADD to Cart</button>
          </p>
        </div>
      </article>
    </li>


  )


}
export default MealItem