import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] bg-gray-50 px-4 text-center">
      <div className="bg-white shadow-md rounded-2xl p-8 md:p-10 max-w-md w-full flex flex-col items-center">
        {/* 🖼️ Error Image */}
        <img
          src={errorImg}
          alt="Error 404"
          className="w-52 h-auto mb-5"
        />

        {/* 🧾 Error Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* 🔘 Go Home Button */}
        <a
          href="/"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
