import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import { addItem, delItem } from '../redux/cartSlice'

const Cart = () => {
    const products = useSelector((state) => state.cart.products)
    const isLogin = useSelector((state) => state.user.isLogin)
    console.log(products);
    const dispatch = useDispatch();

    const navigate = useNavigate()
    
    useEffect(
        () => {
            if(!isLogin){
                navigate('/login')
            }
        }, []
    )
    const addProduct = (product) => {
        dispatch(addItem(product))
    }

    const delProduct = (product) => {
        dispatch(delItem(product))
    }

    const ShowCartItem = () => {
        
        return (
            <>
            {
                products.map((product) => {
                   return( 
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={product.image} className="img-fluid rounded-start" alt={product.title}
                                height="200px" width="180px"
                            />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${product.qty*product.price}
                                </p>
                                <button className='btn btn-outline-dark me-4' 
                                onClick={() => addProduct(product)}>
                                    <i className='fa fa-plus'></i>
                                </button>
                                <button className='btn btn-outline-dark me-4'
                                onClick={() => delProduct(product)}>
                                    <i className='fa fa-minus'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )})
            }
            </>
        )
    }

    return (
        <div>
            <Navbar/>
            {
                products.length>0?(
                    <ShowCartItem />
                ):(
                    Cart
                )
            }
        </div>
        // Cart
    )
}

export default Cart