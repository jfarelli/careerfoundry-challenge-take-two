import './SingleCourse.css'

const SingleCourse = ({id, title}) => {
  return (
    <div className='single-course-container'>
      <p className='single-course'>{title}</p>
    </div>
  )
}

export default SingleCourse
