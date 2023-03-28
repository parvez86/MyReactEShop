import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Skeleton from 'react-loading-skeleton'
// import { addCart } from '../redux/action'
import { addItem } from '../redux/cartSlice'

const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    // let componentMounted = true;
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addItem(product))
    }

    useEffect(() => {
        const getProduct =  async () => {
            setLoading(true)
            console.log(`https://fakestoreapi.com/products/${id}`);
            let res = await fetch(`https://fakestoreapi.com/products/${id}`, 
            {mode:'cors'});
            
            // if (componentMounted){
                res = await res.clone().json()
                setProduct(res)
                console.log(res);
                setLoading(false)
                console.log(loading);
            // }

            // return () =>{
            //     componentMounted = false;
            // }
            
        }
        getProduct();
    },[])
    
    const Loading = () => {
        return(
        <>
            <div  className='col-md-6'>
                <Skeleton height={400}/>
            </div>
            <div className='col-md-6' style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:'6px'}}/>
            </div>
        </>
        )
    }

    const ShowProducts = () => {
        return (
        <>
             <div className="col-md-6">
                <img src={product.image} className="img-fluid rounded-start" alt="Single Product" width={450} height={400}/>
            </div>
            <div className="col-md-6">
                        <div className="">
                            <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                            <h1 className="display-5">{product.title}</h1>
                            <p className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star'/>
                            </p>
                            <p className='lead fw-bolder'>Item: {product.rating.count}</p>
                            <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                            <div className="lead">
                                <p >
                                    {product.description}
                                </p>
                            </div>
                            <div>
                                <button className='btn btn-outline-dark my-2 mx-2 py-2'
                                onClick={() => addProduct(product)}>Add to cart</button>
                                <NavLink to="/cart"><button className='btn btn-dark py--5'>Go to cart</button></NavLink>
                            </div>
                        </div>
                    </div>
        </>
        )
    }

    return (
    <div>
        <Navbar/>
        <div className='row g-0'>
        {
            product ? <ShowProducts/>:<Loading/>
        }
        </div>
    </div>
  )
}

export default Product