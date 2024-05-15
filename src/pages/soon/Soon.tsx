import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Soon() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <FontAwesomeIcon
        icon={faClock}
        size="3x"
        className="text-gray-800 mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-800">
        This page is coming soon!
      </h1>
      <p className="text-gray-600 mt-4">
        We're currently working on this section and will have it available soon.
      </p>
    </div>
  );
}

export default Soon;
