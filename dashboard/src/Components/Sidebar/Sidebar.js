import React from 'react'
import './Sidebar.css'
import iconDashboard from './analytics.svg'
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidenav">
    <img src={iconDashboard} alt="icone analytics" />
    <Link to="/react-chartjs-dashboard/">FINANCE</Link>
    <Link to="/react-chartjs-dashboard/dashboard-employees/">EMPLOYMENT</Link>
</nav>
  )
}
