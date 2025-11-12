import errorImg from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
     <img src={errorImg} alt="" />
      <div className='text-center mb-2'>
        <p className="text-xl mt-5 text-black">Oops! Page Not Found.</p>
      <p className=" text-black">The page you are looking for is not available..</p>
      </div>
      <a
        href="/"
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Go Home
      </a>
    </div>
    );
};

export default ErrorPage;