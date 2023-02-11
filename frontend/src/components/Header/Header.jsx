import React,{useEffect} from "react";
import logo from "../../assets/logo.png"; // import the logo image
import styles from "./Header.module.scss"; // import the CSS file
import {useDispatch,useSelector} from "react-redux"
import { logout } from "../../features/auth/authSlice";
import { history } from "../../helpers/history";
const Header = () => {
  const dispatch=useDispatch();

  const {user}=useSelector((state)=>state.auth)
// useEffect(()=>{
//   if(!user){
//     history.navigate("/login")
//   }
// },[dispatch])
  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}><img src={logo} alt="TaskMate Logo" className={styles.header__logo} />TaskMate</h1>
      
      <button className={styles.header__logout__button} onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
