


const FlowtingMenu = () => {

    return (
        <div className="relative z-20 " >
            <div className="navbar bg-[#071632]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3  p-2 py-4 shadow bg-base-100 rounded-box min-w-52 absolute z-[99]">
                            <li><a href="/#about" className="menu-items text-[3rem]" >About</a></li>
                            <li><a href="/#skills" className="menu-items text-[3rem]" >Skills</a></li>
                            <li><a href="/#projects" className="menu-items text-[3rem]" >Projects</a></li>
                            <li><a href="/#contact" className="menu-items text-[3rem]" >Contact Me!</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlowtingMenu;