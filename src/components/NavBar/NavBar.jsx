import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="bg-teal-500 p-4 text-white neon top-0 left-0 right-0 z-10 flex items-center justify-between rounded">
      <div className="flex items-center">
        <span className="ml-2">Welcome, {user.name}</span>
        <Link to="/content" className="ml-4 hover:text-gray-300">History</Link>
        <Link to="/content/new" className="ml-4 hover:text-gray-300">New Content</Link>
        <Link to="/about" className="ml-4 hover:text-gray-300">About</Link>
      </div>
      <div>
        <Link to="" onClick={handleLogOut} className="hover:text-gray-300">Log Out</Link>
      </div>
    </nav>
  );
}