import React from 'react';
import { useSelector } from 'react-redux';
import {  Route, Navigate, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import DashBoard from '../components/DashBoard';
import Tournaments from '../components/Tournaments';
import Chat from '../components/Chat';
import NotFound from '../components/NotFound';


function RoutesComponent ({ component: Component, ...rest }) {
      const user = useSelector((state)=>{
          return state.user.data
      })

      return  <Routes>
                    <Route path="/" element={ <Navigate to="/login"/> } />
                    <Route path="/login" element={ user? <Navigate to="/dashboard"/> : <Login/> } />
                    <Route path="/signup" element={ user? <Navigate to="/dashboard"/> : <Signup/> } />
                    <Route path="/dashboard" element={user? <DashBoard></DashBoard>: <Navigate to="/login"/>} > 
                        <Route index element={ <Navigate to="/dashboard/tournaments"/> }/> 
                        <Route path='tournaments' element={<Tournaments></Tournaments>}/> 
                        <Route path='chat' element={<Chat></Chat>}/> 
                    </Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
              </Routes>
}

export default RoutesComponent;
