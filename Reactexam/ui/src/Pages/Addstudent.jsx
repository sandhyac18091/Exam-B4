import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Addstudent = () => {
    const [studentname, setStudentname] = useState('');
    const [enrollmentno, setEnrollmentno] = useState('');
    const [course, setCourse] = useState('');
    const [dateofenrollment, setDateofenrollment] = useState('');
    const [Error, setError] = useState('');
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/addstudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    StudentName: studentname,
                    EnrollmentNumber: enrollmentno,
                    Course: course,
                    DateofEnrollment: dateofenrollment,
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Error adding student record");
            } else {
                alert('Student record added successfully');
                navigate('/viewstudents'); 
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form 
                    onSubmit={handlesubmit} 
                    className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
                >
                    {Error && <p className="text-red-500 text-sm">{Error}</p>}
                    
                    <input 
                        type="text" 
                        placeholder="Student Name" 
                        value={studentname} 
                        onChange={(e) => setStudentname(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg "
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Enrollment Number" 
                        value={enrollmentno} 
                        onChange={(e) => setEnrollmentno(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg "
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Course" 
                        value={course} 
                        onChange={(e) => setCourse(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg "
                    />
                    
                    <input 
                        type="date" 
                        value={dateofenrollment} 
                        onChange={(e) => setDateofenrollment(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-lg "
                    />
                    
                    <button 
                        type="submit" 
                        className="w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 "
                    >
                        Add Student
                    </button>
                </form>
            </div>
        </>
    );
};

export default Addstudent;
