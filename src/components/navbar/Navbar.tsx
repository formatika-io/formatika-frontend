// import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import eyeIcon from "../../assets/images/eye-icon.png";

function Navbar() {
  return (
    <nav className="px-16 py-6 text-white flex items-center justify-between">
      <Link to="/" className="text-xl font-bold flex items-center relative">
        <span>formatika.i</span>
        {/* <FontAwesomeIcon icon={faEye} className="text-[17px] ml-[2px]" /> */}
        <img src={eyeIcon} alt="" className="h-7 absolute -right-8" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
