//navbar for the app
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 p-4 bg-gray-700 glass font-orbitron">
        <div className="">
          <div className="flex justify-between">
            <nav className="flex space-x-4">
              <Link className="text-red-400 hover:text-red-700" to="/posts">
                Posts
              </Link>
              <Link className="text-red-400 hover:text-red-700" to="/profile">
                Profile
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <FiMenu className="text-red-400 hover:text-red-700" />
              <Link className="text-red-400 hover:text-red-700" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
