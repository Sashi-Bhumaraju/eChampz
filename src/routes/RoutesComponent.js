import React from 'react';
import { useSelector } from 'react-redux';
import {  Route, Navigate, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import DashBoard from '../components/DashBoard';


function RoutesComponent ({ component: Component, ...rest }) {
      const user = useSelector((state)=>{
          return state.user.data
      })

      return  <Routes>
                    <Route path="/" element={ <Navigate to="/login"/> } />
                    <Route path="/login" element={ user? <Navigate to="/dashboard"/> : <Login/> } />
                    <Route path="/signup" element={ user? <Navigate to="/dashboard"/> : <Signup/> } />
                    <Route path="/dashboard" element={ user? <DashBoard/> : <Navigate to="/login"/>  }/>
              </Routes>
}

export default RoutesComponent;
