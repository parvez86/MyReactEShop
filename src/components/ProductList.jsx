import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addItem } from './redux/cartSlice';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [activCat, setActiveCat] = useState(1);
    const [isLogin, setIsLogin] = useState(
        useSelector((state) => state.user.isLogin)
    )

    let dispatch = useDispatch()
    const navigate = useNavigate()

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            let url = "https://fakestoreapi.com/products";
            const response = await fetch(url);
            if (componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                
                console.log("filter: ", filter);
                setLoading(false)
                console.log(loading);
            }

            return () =>{
                componentMounted = false;
            }
        }

        getProducts();
    }, [])

    useEffect(() => {
        console.log("data: ", data);
    }, [data])

    useEffect(() => {
        console.log("filter: ", filter);
    }, [filter])
    const addProduct = (product) => {
        if(!isLogin){
            navigate('/login')
        }
        dispatch(addItem(product))
    }

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const filterProducts = (category, id) => {
        console.log(category);
        console.log(data.filter((item) => item.category === category));
        setActiveCat(id);
        (category !== 'data') ?
        setFilter(data.filter((item) => item.category === category)):
        setFilter(data);
    }

    const ShowProducts = () => {
        return (
            <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                {
                    activCat===1?<button className='btn btn-outline-dark active' onClick={() => filterProducts('data', 1)}>All</button>:<button className='btn btn-outline-dark' onClick={() => filterProducts('data', 1)}>All</button>
                }
                {
                    activCat===2?<button className='btn btn-outline-dark active' onClick={() => filterProducts(`men's clothing`, 2)}>Men's Clothing</button>:<button className='btn btn-outline-dark me-2' onClick={() => filterProducts(`men's clothing`, 2)}>Men's Clothing</button>
                }
                {
                    activCat===3?<button className='btn btn-outline-dark me-2 active' onClick={() => filterProducts(`women's clothing`, 3)}>Women's Clothing</button>:<button className='btn btn-outline-dark me-2' onClick={() => filterProducts(`women's clothing`, 3)}>Women's Clothing</button>
                }
                {
                    activCat===4?<button className='btn btn-outline-dark me-2 active' onClick={() => filterProducts('jewelery', 4)}>Jewelery</button>:<button className='btn btn-outline-dark me-2' onClick={() => filterProducts('jewelery', 4)}>Jewelery</button>
                }
                {
                    activCat===5?<button className='btn btn-outline-dark me-2 active' onClick={() => filterProducts('electronics', 5)}>Electronics</button>:<button className='btn btn-outline-dark me-2' onClick={() => filterProducts('electronics', 5)}>Electronics</button>
                }
                
            </div>
            {
                filter.map((product) => {
                    return (
                        <>
                            <div id={product.id} className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id} style={{width: "18rem"}}>
                                    <NavLink to={"/product/"+product.id}> <img src={product.image} className="card-img-top" alt="prod_image" height="250px"/></NavLink>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text fw-bold lead">${product.price}</p>
                                        <button className='btn btn-outline-dark' style={{marginLeft:'0px', marginRight:'5px'}} onClick={() => addProduct(product)}>Add to cart</button>
                                        <button href="#" className="btn btn-dark">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
        )
    }

    return (
        <div className='bg-light'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {
                        loading? <Loading/> : <ShowProducts />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList