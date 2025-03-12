import React, { useState } from 'react';
import Navbar from '../component/Navbar';

const SearchCourse = () => {
    const [course, setCourse] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!course.trim()) {
            setError('Please enter a course name');
            setResults([]);
            return;
        }

        try {
            const response = await fetch(`/api/getcourse/${course}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error fetching course details');
            }

            setResults(data);
            setError(''); 
        } catch (err) {
            setResults([]);
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-yellow-50">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">
                        Search Course
                    </h1>

                    <form 
                        onSubmit={handleSearch} 
                        className="flex items-center gap-2 mb-4"
                    >
                        <input
                            type="text"
                            placeholder="Enter Course Name"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg "
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg "
                        >
                            Search
                        </button>
                    </form>

                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}

                    {results.length > 0 && (
                        <div className="space-y-3">
                            {results.map((student) => (
                                <div 
                                    key={student._id} 
                                    className="p-4 border border-gray-200 rounded-lg shadow-md"
                                >
                                    <p><strong>Student Name:</strong> {student.studentName}</p>
                                    <p><strong>Enrollment Number:</strong> {student.enrollmentNo}</p>
                                    <p><strong>Course:</strong> {student.course}</p>
                                    <p><strong>Date of Enrollment:</strong> 
                                        {new Date(student.dateofEnrollment).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {results.length == 0 && !error && (
                        <p className="text-gray-500 text-center">No results found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchCourse;
