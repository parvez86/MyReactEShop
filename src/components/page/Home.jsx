import React from 'react'
import ProductList from '../ProductList'

const Home = () => {
  return (
    <div className='hero' style={{height:'550px'}}>
        <div className="card text-light border-0">
            <img src="/images/bg_img.jpg" className="card-img" alt="background"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <h5 className="card-title display-3 fw-bold mb-0">NEW SEASON ARRIVAL</h5>
                    <p className="card-text">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
        <ProductList/>
    </div>
  )
}

export default Home