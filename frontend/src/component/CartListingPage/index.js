import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartListingPage.css'
import { fetchProducts, getProduct } from '../../store/products'


const CartListing = ({cartItem}) => {
    const dispatch = useDispatch();
    const product = useSelector(getProduct(cartItem.productId))
    console.log(product.name)

    
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    
    const {name, photoUrl, price} = product;

    return (
        <>
            {/* <div>{cartItem.productId}</div> */}
            <img src={photoUrl} alt="product"/>
            <div>{name}</div>
            <div>${price}</div>
            <div>quantity: {cartItem.quantity}</div>
        </>
  
    )
}

export default CartListing;