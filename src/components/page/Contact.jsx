import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

const Contact = () => {

  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [textarea, setTextArea] = useState("")
  const [userInfo, setUserInfo] = useState({})

  const onSubmit = () => {
      const upInfo = {  
        username:username,
        email: email,
        comment: textarea
      };
      setUserInfo( (userInfo) => ({
        ...userInfo,
        ...upInfo
        }
      ));
      console.log(userInfo);
      setUserName('')
      setEmail('')
      setTextArea('')
  }

  useEffect(() => {
      console.log(userInfo)
  }, [userInfo])
  
  return (
    <div className=''>
        <Navbar/>
        <div class="card">
          <div className="row">
            <div className="col-md-6 p-4">
              <img src="/images/contact.jpg" width={450} height={750} className="img-fluid rounded-start" alt="conact us" style={{objectFit:"cover"}}/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="display text-center fw-bold"> Contact Us</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Leo duis ut diam quam nulla porttitor massa id neque. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Massa placerat duis ultricies lacus sed turpis tincidunt id. Curabitur gravida arcu ac tortor. Non arcu risus quis varius. Turpis egestas pretium aenean pharetra magna. Egestas dui id ornare arcu. Interdum velit laoreet id donec.</p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i>: sp.admin@gmail.com</p>
                <p><i className="fa fa-phone-square" aria-hidden="true"></i>: 01291921928</p>
              </div>
            </div>
          </div>
        </div>
        <div className='cotainer p-5 mu-10 col-md-8'>
          <h4 className='form label text-danger fw-bold'>Contact Form</h4>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="email" class="form-control" value={username} id="username" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control"  value={email} id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="text-area" class="form-label">Example textarea</label>
          <textarea class="form-control" value={textarea} id="teararea" rows="3" onChange={(e) => setTextArea(e.target.value)}></textarea>
        </div>
        <div>
            <button className='btn btn-primary fe-bold' id="submit" onClick={onSubmit}>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact