import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <div id="nav-bar" className="flex justify-between items-center p-4 bg-gray-100">

        <div id="nav-logo" className="flex items-center">
          <Link to='/'><img src=".\logo2.jpg" alt="InstaMedi's Logo" className="h-8" /></Link>
        </div>

        <div id="nav-links" className="hidden md:flex items-center space-x-4">
          <ul id="links" className="flex space-x-4">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='providers'>GetDoctor</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='contactcard'>FAQS</Link></li>
          </ul>
        </div>

        

      </div>
    </>
  );
}

export default NavBar;
