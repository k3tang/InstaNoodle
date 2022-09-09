import Cart from '../CartIndexPage'
import './CartListingPage.css'


const CartListing = ({cartItem}) => {

    const {id, product_id, quantity} = cartItem
    return (
        <>
            <h1>hello world</h1>
            <div>{product_id}</div>
            <div>{quantity}</div>
        </>
  
    )
}

export default CartListing;