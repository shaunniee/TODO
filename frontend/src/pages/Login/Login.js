import React, { useRef, useEffect,useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/auth/authSlice"
import { login } from "../../features/auth/authSlice";
function Login() {
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const {user,isLoading,isSuccess,isError,message}= useSelector((state)=>
    state.auth
  )
  
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const [userData,setUserData]=useState({
    email:"",
    password:""
  })
  const {email,password}=userData
  const onChange=(e)=>{
    setUserData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))

  }
  const onSubmit=(e)=>{
    e.preventDefault()
    if(!email || !password){
      toast.error("Please enter email and password")
      return;
    }
    const dispatchData={email,password}
    dispatch(login(dispatchData))

  }

  const inputElement = useRef(null);
  useEffect(() => {
    inputElement.current.focus();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <img
          className={styles.container__left_logo}
          src={logo}
          alt="Task mate logo"
        />
        <h1>Welcome to TaskMate!!</h1>
        <p className={styles.container__left_desc}>
          Start using TaskMate today and experience the satisfaction of crossing
          off your to-dos with ease.
        </p>
      </div>
      <div className={styles.container__right}>
        <div className={styles.login}>
          <div className={styles.login__logo}>
            <img src={logo} alt="Task mate logo" /> TaskMate
          </div>
          <h2 className={styles.login__head}>Welcome to TaskMate</h2>
          <form onSubmit={onSubmit}  className={styles.form} >
            <div className={styles.form__item}>
              <label htmlFor="email">Email</label>
              <input onChange={onChange} value={email} ref={inputElement}inputElement type="email" name="email" id="email" />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="password">Password</label>
              <input onChange={onChange} value={password} type="password" name="password" id="password" />
            </div>
            <button type="submit">Sign In</button>
          </form>

          <p className={styles.login__bottom}>
            No account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
