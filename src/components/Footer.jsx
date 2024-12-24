import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">VolunteerHub</h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Making a difference together
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="/about-us"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-yellow-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 VolunteerHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
