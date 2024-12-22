import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold dark:text-gray-100">VolunteerHub</h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Making a difference together</p>
        </div>

        <div className="flex flex-col md:flex-row mb-4 md:mb-0 space-y-2 md:space-x-6 md:space-y-0">
          <Link to="/about-us" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">About Us</Link>
          <Link to="/contact" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">Contact</Link>
          <Link to="/privacy-policy" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">Privacy Policy</Link>
          <Link to="/terms-of-service" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">Terms of Service</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400 dark:text-gray-500">
        <p>&copy; 2024 VolunteerHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
