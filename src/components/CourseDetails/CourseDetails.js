import { Link } from 'react-router-dom';
import './CourseDetails.css';
import Loading from '../Loading/Loading';
const dayjs = require('dayjs');

const CourseDetails = ({
  singleCourse,
  singleCourseDetails,
  setSingleCourse,
  setSingleCourseDetails,
}) => {
  const handleClick = () => {
    setSingleCourse([]);
    setSingleCourseDetails([]);
  };
  return (
    <div className="course-details-container">
      {!singleCourseDetails.start_dates ? (
        <Loading />
      ) : (
        <div>
          <h1>{singleCourse.title}</h1>
          <p className="course-description-text">
            "{singleCourseDetails.description}"
          </p>
          <div>
            <p>
              <b>Price: </b>$
              {singleCourseDetails.prices[0].amount.toLocaleString() +
                ' ' +
                singleCourseDetails.prices[0].currency.toUpperCase()}
            </p>
          </div>
          <div>
            <p>
              <b>Next Start Date: </b>
              {dayjs(singleCourse.next_start).format('dddd, MMMM D YYYY')}
            </p>
          </div>
          <div>
            <p>
              <b>Future Start Dates: </b>
              {dayjs(singleCourseDetails.start_dates[1]).format(
                'dddd, MMMM D YYYY'
              )}{' '}
              |{' '}
              {dayjs(singleCourseDetails.start_dates[2]).format(
                'dddd, MMMM D YYYY'
              )}
            </p>
          </div>
          <div className="career-foundry-website-link-text-container">
            <p className="career-foundry-website-link-text">
              <a
                className="website-anchor"
                target="_blank"
                rel="noreferrer"
                href={singleCourse.url}
                aria-label={`CareerFoundry Website`}
              >
                <span className="career-foundry-span-text">
                  CAREER<b>FOUNDRY</b>
                </span>{' '}
                Course Overview
              </a>
            </p>
          </div>
          <div>
            <Link to="/">
              <button onClick={handleClick}>HOME</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
