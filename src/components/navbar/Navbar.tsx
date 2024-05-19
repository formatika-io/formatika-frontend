// import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import eyeIcon from "../../assets/images/eye-icon.png";

function Navbar() {
  return (
    <nav className="px-36 py-8 text-white flex items-center justify-between">
      <Link to="/" className="text-xl font-bold flex items-center relative">
        <span>formatika.i</span>
        {/* <FontAwesomeIcon icon={faEye} className="text-[17px] ml-[2px]" /> */}
        <img src={eyeIcon} alt="" className="h-7 absolute -right-8" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">
            dokumentasiya
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            biz kimik?
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">
            əlaqə
          </Link>
        </li>
        <li>
          <Link to="/login" className="px-4 py-2 rounded border border-white">
            daxil ol
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
