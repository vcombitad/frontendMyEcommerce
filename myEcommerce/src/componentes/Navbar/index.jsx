import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { CarShopContext } from "../../Context";
import { BsCartCheckFill } from "react-icons/bs";

const Navbar=()=>{
    const context= useContext(CarShopContext)
    const activeStyle= 'underline underline-offset-4';
    return (
        <nav className='flex justify-between fixed z-10 items-center w-full py-5 px-8 top-0 border-b-2'>

            <ul className="flex items-center gap-3">
                <li className='font-bold text-2xl'>
                    <NavLink
                    to='/'
                    onClick={()=>context.setSearchByCategory()}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                    to='/'>
                        Subtle Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={()=>context.setSearchByCategory()}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/'>
                        all
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={()=>context.setSearchByCategory('watch')}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/watch'>
                        watch
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={()=>context.setSearchByCategory('paint')}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/paint'>
                        Paint
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={()=>context.setSearchByCategory('shelves')}
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
                    to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex justify-center'>
                    <BsCartCheckFill/> <span>{context.count}</span>
                </li>
                <li></li>
                
            </ul>
        </nav>
    )
}
export default Navbar