import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <div className='menu'>
            <div className='menu-left'>
            <Link className='link' to="/">Üdítők</Link>
            <Link className='link' to="/szerkeszt">Szerkeszt</Link>
            </div>
            <div className='menu-right'>
            <Link className='link' to="/nevjegy">Névjegy</Link>
            </div>
            
        </div>
        <div className='pages'>
            <Outlet/>
        </div>
    </div>
    )
}
