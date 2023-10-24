import { NavLink } from "react-router-dom"

const Navbar=()=>{
    const activeStyle= 'underline underline-offset-4';
    return (
        <nav className='flex justify-between fixed z-10 items-center w-full py-5 px-8'>

            <ul className="flex items-center gap-3">
                <li className='font-bold '>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
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
                    to='/wall-watch'>
                        Wall Watch
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : ""
                  }
                    to='/decorative-painting'>
                        Decorative Painting
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
                
            </ul>
        </nav>
    )
}
export default Navbar