import React,{useState} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from './widgets/Navbar';
import { useSelector } from 'react-redux';
import Appbar from './widgets/AppBar';

function DashBoard  () {

  

    return <div className="dashboard">
                <Appbar></Appbar>
                <div className='dashboard-navigation'>
                    <Navbar></Navbar>
                </div>
                <div className='dashboard-content'>
                    <div className='dashboard-content-container'>
                    <Outlet></Outlet>   
                    </div>
                </div>
           </div>;
           
}

export default DashBoard;




