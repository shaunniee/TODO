import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
function WithNav() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default WithNav