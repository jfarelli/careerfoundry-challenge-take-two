import './SingleCourse.css';
import { Link } from 'react-router-dom';

const SingleCourse = ({ id, title, getSingleCourseDetails }) => {
  return (
    <div className="single-course-container">
      <p className="single-course" onClick={() => getSingleCourseDetails(id)}>
        <Link
          to={'/details'}
          style={{ textDecoration: 'none', color: 'whitesmoke' }}
        >
          {title}
        </Link>
      </p>
    </div>
  );
};

export default SingleCourse;
