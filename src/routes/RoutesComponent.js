import React from 'react';
import { useSelector } from 'react-redux';
import {  Route, Navigate, Routes } from 'react-router-dom';
import Login from '../components/screens/Login';
import Signup from '../components/screens/Signup';
import DashBoard from '../components/DashBoard';
import Tournaments from '../components/screens/Tournaments';
import Chat from '../components/screens/Chat';
import NotFound from '../components/widgets/NotFound';
import MyTournaments from '../components/screens/MyTournaments';
import Profile from '../components/screens/Profile';
import ProfileEdit from '../components/screens/ProfileEdit';


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
                        <Route path='my-tournaments' element={<MyTournaments></MyTournaments>}/> 
                        <Route path='profile' > 
                            <Route index element={<Profile></Profile>}></Route>
                            <Route path='edit' element={<ProfileEdit></ProfileEdit>}></Route>
                        </Route>
                    </Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
              </Routes>
}

export default RoutesComponent;
