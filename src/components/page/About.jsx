import React from 'react'
import Navbar from '../Navbar'

const About = () => {
  return (
    <div className=''>
        <Navbar/>
        <div class="card">
          <div className="row">
            <div className="col-md-6 p-4">
              <img src="/images/cr.jpg" width={450} height={750} className="img-fluid rounded-start" alt="creator" style={{objectFit:"cover"}}/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="display text-center fw-bold">About Us</h2>
                <h6 className="display text-center text-danger fw-bold"> Front-end Developer & Designer</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Leo duis ut diam quam nulla porttitor massa id neque. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Massa placerat duis ultricies lacus sed turpis tincidunt id. Curabitur gravida arcu ac tortor. Non arcu risus quis varius. Turpis egestas pretium aenean pharetra magna. Egestas dui id ornare arcu. Interdum velit laoreet id donec.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About