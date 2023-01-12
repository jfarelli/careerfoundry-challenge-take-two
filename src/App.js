import './App.css';
import { fetchCourses, fetchCourseDetails } from './apiCalls';
import CourseContainer from './components/CourseContainer/CourseContainer';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails/CourseDetails';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [singleCourse, setSingleCourse] = useState([]);
  const [singleCourseDetails, setSingleCourseDetails] = useState([]);

  useEffect(() => {
    fetchCourses().then((data) => setCourses(data));
  }, []);

  const getSingleCourseDetails = (slugName) => {
    const singleCoursePick = courses.find((course) => course.slug === slugName);
    setSingleCourse(singleCoursePick);
    fetchCourseDetails(singleCoursePick.slug).then((data) =>
      setSingleCourseDetails(data)
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CourseContainer
                courses={courses}
                getSingleCourseDetails={getSingleCourseDetails}
              />{' '}
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <Header />
              <CourseDetails
                singleCourse={singleCourse}
                singleCourseDetails={singleCourseDetails}
                setSingleCourse={setSingleCourse}
                setSingleCourseDetails={setSingleCourseDetails}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
