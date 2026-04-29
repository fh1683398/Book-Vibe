import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/listed-books"><li>Listed Books</li></NavLink>
        <NavLink to="/pages-to-read"><li>Pages to read</li></NavLink>
    </>

    return (
        <nav className='flex max-w-292 mx-auto justify-between py-5 items-center px-6 lg:px-0'>
            {/* Mobile menu */}
            {
                openMenu && (
                    <div className='lg:hidden bg-black/60 z-50 fixed inset-0 h-full w-full' onClick={()=>setOpenMenu(!openMenu)}>

                        <div className='bg-white w-2/3 h-screen p-6 space-y-6' onClick={(e)=> e.stopPropagation()}>
                            <div onClick={()=>setOpenMenu(!openMenu)}><X /></div>
                            <ul className='text-gray-600' onClick={()=>setOpenMenu(!openMenu)}>
                                {links}
                            </ul>
                        </div>
                    </div>
                )
            }

            <div className='flex items-center gap-2'>

                <button onClick={handleOpenMenu} className='lg:hidden'>{openMenu ? <X /> : <Menu />}</button>
                <Link to="/"><h4 className='text-xl md:text-2xl font-bold text-yellow-600'>Book Vibe</h4></Link>
            </div>

            <ul className='hidden lg:flex gap-6 text-gray-600'>
                {links}
            </ul>

            <div className=''>
                <Link><button className='px-4 py-2 rounded-lg font-medium bg-yellow-600 text-white cursor-pointer'>Sign In</button></Link>
            </div>

        </nav>
    );
};

export default Navbar;