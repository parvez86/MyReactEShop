import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import { addUser } from '../redux/userSlice'

const Register = () => {
  const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isReistered, setIsRegistered] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const onRegister = () => {
      console.log('====================================');
      console.log(name, " ", email, " ", password);
      console.log('====================================');
        if (name && name !== "" && email && email !=="" && password && password !== ""){
          const registerInfo = {
              name:name,
              email:email,
              password:password
          }
          console.log('====================================');
          console.log(registerInfo);
          console.log('====================================');
          let resFlag = dispatch((addUser(registerInfo)))
          if(resFlag){
              setIsRegistered(true)
              navigate("/login")
          }
        }
    }
    return (
      <div>
          <Navbar/>
          <div className="container">
            <div className="main text-center">
                <div className="loginbox mx-auto mt-5 p-5 bg-light border border-2 rounded" style={{width:"45%"}}>
                    <h1 className="mb-5">Registration form</h1>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text">Name</span>
                        <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} placeholder="user name"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Username/Email</span>
                        <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    {/* <button className="btn bg-success rounded border text-white mt-3" onClick={onLogin}>Log in</button> */}
                    <button className="btn bg-primary rounded border text-white mt-3" onClick={onRegister}>Register</button>
                    {/* </div> */}
                </div>
            </div>
          </div>
      </div>
    )
}

export default Register