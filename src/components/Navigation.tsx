import { Link } from "react-router-dom";
import { internalPaths } from "../paths";
import { useAuth } from "../context/AuthProvider";

export function Navigation() {
  const auth = useAuth();
  const logout = () => {
    auth.signout();
  };
  return (
    <nav className="flex justify-between bg-[#44281d] text-[#97ce4c] p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to={internalPaths.home} className="hover:text-[#ff9800]">
            Home
          </Link>
        </li>
        <li>
          <Link
            to={internalPaths.category("characters")}
            className="hover:text-[#ff9800]"
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            to={internalPaths.category("locations")}
            className="hover:text-[#ff9800]"
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            to={internalPaths.category("episodes")}
            className="hover:text-[#ff9800]"
          >
            Episodes
          </Link>
        </li>
      </ul>
      <div className="ml-auto flex items-center space-x-4">
        {auth.user && (
          <>
            <span className="font-bold">{auth.user.name}</span>
            <a href="#" onClick={logout} className="hover:text-[#ff9800]">
              Logout
            </a>
          </>
        )}
        {!auth.user && (
          <Link to="/login" className="hover:text-[#ff9800]">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
