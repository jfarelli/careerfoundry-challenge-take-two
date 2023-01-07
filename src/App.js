// import logo from './logo.svg';
import './App.css';
import fetchCourses from './apiCalls';
import CourseContainer from './components/CourseContainer/CourseContainer';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

const App = () => {
  const [singleCourse, setSingleCourse] = useState([]);

  useEffect(() => {
    fetchCourses().then(data => setSingleCourse(data))
  }, [])



  return (
    <div className="App">
      <Header />
      <CourseContainer singleCourse={singleCourse}/>
    </div>
  );
}

export default App;
