import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { CarShopContext } from "../../Context";

const Navbar=()=>{
    const context= useContext(CarShopContext)
    const activeStyle= 'underline underline-offset-4';
    return (
        <nav className='flex justify-between fixed z-10 items-center w-full py-5 px-8 top-0'>

            <ul className="flex items-center gap-3">
                <li className='font-bold '>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                    to='/'>
                        shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/'>
                        all
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/watch'>
                        Watch
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/paint'>
                        Paint
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/shelves'>
                        shelves
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/my-shop'>
                        My Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/shop'>
                        shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    {context.count}
                </li>
                
            </ul>
        </nav>
    )
}
export default Navbar