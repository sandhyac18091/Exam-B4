
import Addstudent from './Pages/Addstudent';
import ViewStudents from './Pages/Viewstudent';
import SearchCourse from './Pages/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addstudent' element={<Addstudent />} />
          <Route path='/viewstudents' element={<ViewStudents />} />
          <Route path='/search' element={<SearchCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
