import React from 'react';
import { useSelector } from 'react-redux';
import {  Route, Navigate, Routes, useParams } from 'react-router-dom';
import Login from '../components/screens/Login';
import Signup from '../components/screens/Signup';
import DashBoard from '../components/DashBoard';
import Tournaments from '../components/screens/Tournaments';
import Chat from '../components/widgets/Chat';
import NotFound from '../components/widgets/NotFound';
import MyTournaments from '../components/screens/MyTournaments';
import Profile from '../components/screens/Profile';
import ProfileEdit from '../components/screens/ProfileEdit';
import TournamentDetails from '../components/screens/TournamentDetails';
import Overview from '../components/widgets/Overview';
import Chatting from '../components/screens/Chatting';
import Participants from '../components/widgets/Participants';
import Matches from '../components/widgets/Matches';
import Rules from '../components/widgets/Rules';
import ChatHome from '../components/screens/ChatHome';


function RoutesComponent ({ component: Component, ...rest }) {
    
      const user = useSelector((state)=>{
          return state.user.data
      })
    
      return  <Routes>
                    <Route path="/" element={ <Navigate to="/login"/> } />
                    <Route path="/login" element={ user? <Navigate to="/dashboard"/> : <Login/> } />
                    <Route path="/signup" element={ user? <Navigate to="/dashboard"/> : <Signup/> } />
                    <Route path="/dashboard" element={user? <DashBoard></DashBoard>: <Navigate to="/login"/>} > 
                        <Route index element={ <Navigate to="tournaments" replace /> }/> 
                        <Route path='tournaments' > 
                            <Route index element={<Tournaments></Tournaments>}/>
                            <Route path=':tid' element={<TournamentDetails></TournamentDetails>}>
                                <Route index element={<Navigate to="overview" replace />} />
                                <Route path='overview' element={<Overview></Overview>} />
                                <Route path='chat' element={<Chat></Chat>} />
                                <Route path='participants' element={<Participants/>} />
                                <Route path='matches' element={<Matches/>} />
                                <Route path='rules' element={<Rules/>} />
                            </Route>    
                        </Route>
                        <Route path='chat' element={<ChatHome></ChatHome>}/> 
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
