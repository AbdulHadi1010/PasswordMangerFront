import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Wrapper from "./Helper/Wrapper";
import Row from "./Helper/Row";
import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isSignedIn, setIsSignedIn }: any) => {
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex items-center bg-slate-800 justify-center py-4 w-full text-white">
      <Wrapper>
        <Row>
          {/* Logo */}
          <div className="text-blue-400">
            <MdSecurity size={40} />
          </div>
          {/* Menu Items */}
          <div className="flex ml-10 gap-5 items-center space-x-4 text-xl font-semibold">
              <Link
                to="/"
                className="cursor-pointer text-white hover:text-gray-300"
              >
                Home
              </Link>
            <Link
                  to="/"
                className="cursor-pointer text-white hover:text-gray-300"
                >
                Features
                </Link>
            {!cookies.access_token ? (
              <>
                <Link
                  to="/SignIn"
                  className="cursor-pointer text-white hover:text-gray-300"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/passwordManager"
                  className="cursor-pointer text-white hover:text-gray-300"
                >
                  My Passwords
                </Link>
                <button
                  onClick={logout}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </Row>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
