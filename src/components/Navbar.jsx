import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addItem } from './redux/cartSlice';
import { logout } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isLogin, setIsLogin] = useState(
    useSelector((state) => state.user.isLogin)
  )
  const [totlal, setTotal] = useState(0)
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    setIsLogin(dispatch(logout()))
    if(!isLogin){
        navigate('/login')
    }
  }
  const getTotal = () => {
    let sum=0;  
    if(products.length>0){
        products.forEach(element => {
            sum+=element.qty;
        });
    }
    return sum;
}
//   useEffect(() => {
//     setTotal(getTotal());
//   }, [])

    useEffect(() => {
        if(!isLogin){
            navigate('/login')
        }
    },[])
  useEffect(() => {
    setTotal(getTotal());
  }, [products])

  useEffect(() => {
    console.log('====================================');
    console.log("isLogin: ",isLogin);
    console.log('====================================');;
  }, [isLogin])
  
  console.log(products);  
  return (
    <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark py-3 shadow-sm">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                SP Collections
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> */}
                    {/* <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                {/* <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    <div className='buttons'>
                        {
                            isLogin? (
                                <NavLink to='/login' className='btn btn-outline-light' onClick={onLogout}>
                                    <i className='fa fa-sign-in'> Logout</i>
                                </NavLink>
                            ):(
                                <NavLink to='/login' className='btn btn-outline-light'>
                                    <i className='fa fa-sign-in'> Login</i>
                                </NavLink>
                            )
                        }

                        <NavLink to='/register' className='btn btn-outline-light'>
                            <i className='fa fa-user-plus'> Register</i>
                        </NavLink>

                        <NavLink  to='/cart' className='btn btn-outline-light'>
                            <i className="fa fa-shopping-cart"> Cart({totlal})</i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar;