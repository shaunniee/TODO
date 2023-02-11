import React, { useRef, useEffect, useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import styles from "./Login.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { history } from "../../helpers/history";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      history.navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const submitUser = (e) => {
    e.preventDefault();
  console.log(userInput)
    if (
      userInput.name ||
      !userInput.password ||
      !userInput.email ||
      !userInput.confirmpassword
    ) {
      console.log("Please input all the fields");
      toast.error("Please input all the fields");
      return;
    }

    if (userInput.password !== userInput.confirmpassword) {
      console.log("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    const { firstname, lastname, email, password } = userInput;
    const data = {
      firstname,
      lastname,
      email,
      password,
    };
    dispatch(register(data));
  };

  const onChange = (e) => {
    setUserInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const inputRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <img className={styles.container__left_logo} src={logo} alt="logo" />
        <h1>Welcome to TaskMate!!</h1>
        <p className={styles.container__left_desc}>
          Start using TaskMate today and experience the satisfaction of crossing
          off your to-dos with ease.
        </p>
      </div>
      <div className={styles.container__right}>
        <div className={styles.login}>
          <div className={styles.login__logo}>
            <img src={logo} alt="Taskmate logo" /> TaskMate
          </div>
          <h2 className={styles.login__head}>Welcome to TaskMate</h2>
          <form onSubmit={submitUser} className={styles.form} action="">
            <div className={styles.form__item}>
              <label htmlFor="firstname">First name</label>
              <input
                onChange={onChange}
                id="firstname"
                name="firstname"
                ref={inputRef}
                type="text"
                required
                value={userInput.firstname}
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="lastname">Last name</label>
              <input
                onChange={onChange}
                id="lastname"
                name="lastname"
                type="text"
                required
                value={userInput.lastname}
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="email">Email</label>
              <input
                onChange={onChange}
                id="email"
                name="email"
                type="email"
                required
                value={userInput.value}
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="password">Password</label>
              <input
                onChange={onChange}
                type="password"
                name="password"
                id="password"
                required
                value={userInput.password}
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                onChange={onChange}
                required
                value={userInput.confirmpassword}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>

          <p className={styles.login__bottom}>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
