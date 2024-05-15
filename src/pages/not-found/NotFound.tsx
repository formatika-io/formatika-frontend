import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        size="3x"
        className="text-gray-800 mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-800">404: Not Found</h1>
      <p className="text-gray-600 mt-4">
        The page you requested could not be found.
      </p>
      <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">
        Come back Home
      </Link>
    </div>
  );
}

export default NotFound;
