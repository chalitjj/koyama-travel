import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'Destinations', path: '/destinations' },
      { name: 'Food & Culture', path: '/food-culture' },
      { name: 'Travel Tips', path: '/travel-tips' }
    ],
    about: [
      { name: 'About Tenchino', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Services', path: '/contact#services' }
    ],
    destinations: [
      { name: 'Tokyo', path: '/destinations#tokyo' },
      { name: 'Osaka', path: '/destinations#osaka' },
      { name: 'Hokkaido', path: '/destinations#hokkaido' },
      { name: 'Miyagi', path: '/destinations#miyagi' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Koyama Travel</h3>
                <p className="text-sm text-gray-400">Your Japanese Mate</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover the authentic Japan with Tenchino's insider knowledge. 
              From hidden gems to local cuisine, experience Japan like never before.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/koyamas_travel10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="mailto:hello@koyamatravel.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© {currentYear} Koyama Travel. All rights reserved.</p>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>for Japan travelers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

