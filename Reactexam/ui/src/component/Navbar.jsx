import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-500 text-white p-4 shadow-md w-full">
            <div className="flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold">Student Portal</h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/home" className="hover:text-gray-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/addstudent" className="hover:text-gray-200">Add Student</Link>
                    </li>
                    <li>
                        <Link to="/viewstudents" className="hover:text-gray-200">View Students</Link>
                    </li>
                    <li>
                        <Link to="/search" className="hover:text-gray-200">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
