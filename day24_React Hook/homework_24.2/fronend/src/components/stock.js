import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const StockManagement = () => {

  const navigate = useNavigate()

  return (
    <div style={{textAlign: "center", marginTop: '100px'}}>
      <h1>No Authenication!!</h1>
      <button style={{marginTop: "50px"}} onClick={() => navigate('/')}>Back to Dashboard</button>
    </div>

  )
}

export default StockManagement