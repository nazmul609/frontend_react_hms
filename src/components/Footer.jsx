import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Peytosoft Corporation</p>
        <p className="text-sm">Located in Ontario, Canada</p>
        <div className="mt-2">
          <a href="/terms" className="text-gray-300 hover:text-gray-400 mx-2">Terms of Service</a>
          <span className="text-gray-300 mx-2">|</span>
          <a href="/privacy" className="text-gray-300 hover:text-gray-400 mx-2">Privacy Policy</a>
          <span className="text-gray-300 mx-2">|</span>
          <a href="/cookies" className="text-gray-300 hover:text-gray-400 mx-2">Cookie Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
