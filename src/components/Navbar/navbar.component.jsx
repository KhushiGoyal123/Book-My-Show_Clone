import React from "react";

import { 
    BiChevronRight, 
    BiSearch, 
    BiMenu, 
    BiChevronDown,
    } from "react-icons/bi";


const NavSm = () => {
    return (
    <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Bengaluru <BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div> 
        </div>
    </>
    );
};
const NavMd= () => {
    return (
    <div className="w-full flex items-center gap-3 bg-white px-3 px-y rounded-md">
        <BiSearch />
        <input type="search" 
        className="w-full bg-transparent border-none focus:outline-none" 
        placeholder="Search for Movies, Events, Plays, Sports and Activities."
        />
    </div>
    );
};
const NavLg = () => {
    return (
        <>  
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3 mx-10">
            <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full "/>
                </div>
                <div className="w-15 h-12">
                    <img 
                    src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" 
                    alt="logo"
                    className="w-full h-full"
                    />
                </div>
            <div className="flex gap-4 mx-2 text-white">
                <a href="#Tvsection">TV</a>
                <a href="#moviesection">Movies</a>
                <a href="#sportsection">Sports</a>
                <a href="#disneyplus">Disney+</a>
                <a href="#kidsection">Kids</a>
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md">
                    <input 
                    type="search" 
                    className="w-full bg-transparent border-b-2 focus:outline-none" 
                    placeholder="Search"
                    />
                    <BiSearch />
                </div>
            <button className="bg-blue-600 text-white px-2 py-1 shadow-2 text-sm rounded">
                    SUBSCRIBE
                </button>
                <button className="text-white px-2 py-1 text-sm rounded">
                    LOGIN
                </button>
                
            </div>
         </div>
        </>
    );
};

const Navbar = () => {
    return (
    <>
        <nav className="bg-bms-700 p-4">
           <div className="md:hidden">
            {/*Mobile Screen */}
           <NavSm />
           </div> 
           
           <div className="hidden md:flex lg:hidden">
            {/*Medium / tab screen */}
            <NavMd />
           </div> 
           
           <div className="hidden w-full lg:flex">
            {/*Large screen */}
            <NavLg />
           </div> 
        </nav>
    </>
    );
};

export default Navbar;