import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const PrivateRouter = () => {
    const {currentUser} = useAuth()
    console.log(currentUser);
  return currentUser?.accessToken ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRouter