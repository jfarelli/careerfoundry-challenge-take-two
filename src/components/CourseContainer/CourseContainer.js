import './CourseContainer.css';
import SingleCourse from '../SingleCourse/SingleCourse';

const CourseContainer = ({ courses, getSingleCourseDetails }) => {
  let initialCourseDetails = courses.map((course) => {
    return (
      <SingleCourse
        id={course.slug}
        key={course.slug}
        title={course.title}
        getSingleCourseDetails={getSingleCourseDetails}
      />
    );
  });
  return (
    <div>
      <h2 className="select-course">Select a Course for Further Details</h2>
      {initialCourseDetails}
    </div>
  );
};

export default CourseContainer;
