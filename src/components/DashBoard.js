import React,{useState} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

function DashBoard  () {

  

    return <div className="dashboard">
                <div className='dashboard-navigation'>
                    <Navbar></Navbar>
                </div>
                <div className='dashboard-content'>
                    <Outlet></Outlet>   
                </div>
           </div>;
           
}

export default DashBoard;




