import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';

const ViewStudents = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('/api/getstudents');
                if (!response.ok) {
                    throw new Error('Failed to fetch student details');
                }
                const data = await response.json();
                setStudents(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchStudents();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
                    <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">
                        Student Details
                    </h1>

                   
                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}

                   
                    {students.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-yellow-500 text-white">
                                        <th className="p-3">Student Name</th>
                                        <th className="p-3">Enrollment Number</th>
                                        <th className="p-3">Course</th>
                                        <th className="p-3">Date of Enrollment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr
                                            key={student._id}
                                            className="even:bg-gray-100"
                                        >
                                            <td className="p-3">{student.studentName}</td>
                                            <td className="p-3">{student.enrollmentNo}</td>
                                            <td className="p-3">{student.course}</td>
                                            <td className="p-3">
                                                {new Date(student.dateofEnrollmen).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        !error && (
                            <p className="text-gray-500 text-center">
                                No student records found.
                            </p>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default ViewStudents;
