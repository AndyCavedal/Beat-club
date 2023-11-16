import { Navigate, Outlet } from "react-router-dom"
import React from 'react'
import { useAuth } from "../context/authContext"
import { ScaleLoader } from 'react-spinners'

const ProtectedRoute = ({})=>{
    const {user, loading} = useAuth()

    if(loading) return (<div className="loading-message">
    <ScaleLoader
        color="#A80038"
        height={70}
        margin={4}
        width={8}
    />
</div>
    )

    if(!user) return <Navigate to='/' />

    return <Outlet />
}

export default ProtectedRoute;