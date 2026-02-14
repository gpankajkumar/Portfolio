import React, {useState} from 'react'
import Home from '../../pages/home/Home';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import "./Layout.css";
import Menus from '../menus/Menus';

function Layout() {
    const [toggle, setToggle] = useState(true);

    // change toggle
    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <div className='sidebar-selection'>
        <div className={toggle ? 'sidebar-toggle sidebar' : "sidebar"}>
            <div className='sidebar-toggle-icons'>
                
                <p onClick={handleToggle}>
                    {
                    toggle ? (<AiOutlineDoubleLeft size={30}/>)
                     : (<AiOutlineDoubleRight size={30} />)
                }
                </p>
        </div>
        
                <Menus toggle={toggle}/>
        </div>
        <div className='container'>
            <Home />
        </div>
    </div>
  )
}

export default Layout;
