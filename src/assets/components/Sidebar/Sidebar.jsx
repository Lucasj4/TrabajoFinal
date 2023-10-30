import React, { children } from 'react'
import {FaHome, FaTh, FaBars}from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import "./Sidebar.css"
const Sidebar = ({children}) => {

    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
      setisOpen(!isOpen)
    }
    const menuItems = [
         {
            path : "/",
            name : "Pedidos de Compra",
            icon: <FaHome/>
    },
         {
            path : "/nuevopedidodecompra",
            name : "Nuevo",
            icon: <FaTh/>
    },
         {
            path : "/procesadores",
            name : "Procesadores",
            icon: <FaTh/>
    }
]
  const sidebarClasses = isOpen ? "sidebar sidebar-expanded" : "sidebar sidebar-collapsed";
  const h2Classes = isOpen ? "logo logo-active" : "logo logo-inactive";
  const linkClass = isOpen ? "link_text link_text-inactive" : "link_text link_text-active";
  const topSecticonClass = isOpen ? "top-section top-section__active" : "top-section";
  return (
    <div className='container'>
        <div className={sidebarClasses}>
            <div className={topSecticonClass}>
                <h2 className={h2Classes}>FC</h2>
                <div className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
       
            {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active" // Nombre del atributo corregido
          >
            <div className="icon">{item.icon}</div>
            <div className={linkClass}>{item.name}</div>
          </NavLink>
        ))}
         </div>
         <main>{children}</main>
    </div>
  )
}

export default Sidebar