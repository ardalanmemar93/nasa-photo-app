import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="bg-blue-500 p-4 text-white neon top-0 left-0 right-0 z-10 mt-16">
      <span className="ml-2">Welcome, {user.name}</span>
      <br />
      <Link to="/content" className="hover:text-gray-300">History</Link>
      <span className="mx-2">|</span>
      <Link to="/content/new" className="hover:text-gray-300">New Content</Link>
      <span className="mx-2">|</span>
      <Link to="/about" className="hover:text-gray-300">About</Link>
      <span className="mx-2">|</span>
      <span className="ml-2"><Link to="" onClick={handleLogOut} className="hover:text-gray-300">Log Out</Link></span>
    </nav>
  );
}