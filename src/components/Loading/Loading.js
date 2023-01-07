import './Loading.css';
import oval from '../../images/oval.svg';

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <img className="loading-image" src={oval} alt="loader" />
    </div>
  );
};

export default LoadingPage;
