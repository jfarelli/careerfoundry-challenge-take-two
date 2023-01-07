import './CourseContainer.css';
import SingleCourse from '../SingleCourse/SingleCourse';

const CourseContainer = ({ singleCourse }) => {
  let courses = singleCourse.map((course) => {
    return (
      <SingleCourse id={course.slug} key={course.slug} title={course.title} />
    );
  });
  return <div><h2 className='select-course'>Select a Course</h2>{courses}</div>;
};

export default CourseContainer;
