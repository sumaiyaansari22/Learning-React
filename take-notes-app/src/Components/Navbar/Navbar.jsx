import React from "react";

const Navbar = () => {

    return (
        <header className="flex bg-blue-700 w-full h-8">
            <div className="container flex items-center h-full w-full">
                <a className="text-white text-xl font-medium">Signup</a>
                <a className="text-white text-xl font-medium">Login</a>
            </div>
        </header>


    )
}

export default Navbar;