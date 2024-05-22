import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Soon() {
  return (
    <div className="container mx-auto px-4 py-16 text-center text-white">
      <FontAwesomeIcon icon={faClock} size="3x" className="mb-4" />
      <h1 className="text-3xl font-bold">This page is coming soon!</h1>
      <p className="mt-4">
        We're currently working on this section and will have it available soon.
      </p>
      <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">
        Come back Home
      </Link>
    </div>
  );
}

export default Soon;
