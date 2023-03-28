import { useEffect, useState } from "react"
import Navbar from "../Navbar"
import { useNavigate } from "react-router-dom"
import { login } from "../redux/userSlice"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [isLogin, setIsLogin] = useState(false)
    const [isLogin, setIsLogin] = useState(useSelector((state) => state.user.isLogin))


    const navigate = useNavigate()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if(isLogin){
    //         navigate('/')
    //     }
    //     setIsLogin(isLogin)
    // }, [isLogin])

    const onLogin = () => {
        const loginInfo = {
            email:email,
            password:password
        }
        // setIsLogin(() => dispatch((login(loginInfo))))
        let res = dispatch(login(loginInfo))
        console.log("res: ", res)
        if(res){
            navigate('/')
        }
    }
    return (
      <div>
          <Navbar/>
          <div className="container ">
            <div className="main text-center">
                <div className="loginbox mx-auto mt-5 p-5 bg-light border border-2 rounded" style={{width:"45%"}}>
                    <h1 className="mb-5">Login form</h1>
                <div className="input-group mb-3">
                    <span className="input-group-text">Username/Email</span>
                    <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" required/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button className="btn bg-primary rounded border text-white mt-3" onClick={onLogin}>Log in</button>
                </div>
            </div>
          </div>
      </div>
    )
  }
  
  export default Login