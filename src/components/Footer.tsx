
import React from 'react';

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'About', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Career', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Contact v2', href: '#' }
    ],
    shop: [
      { name: 'Shop', href: '#' },
      { name: 'With sidebar', href: '#' },
      { name: 'Product detail', href: '#' },
      { name: 'Product detail v2', href: '#' },
      { name: 'Cart', href: '#' },
      { name: 'Checkout', href: '#' },
      { name: 'Order confirmation', href: '#' }
    ],
    account: [
      { name: 'Request a demo', href: '#' },
      { name: 'Sign in', href: '#' },
      { name: 'Sign in v2', href: '#' },
      { name: 'Sign up', href: '#' },
      { name: 'Sign up v2', href: '#' },
      { name: 'Reset password', href: '#' },
      { name: 'Reset password v2', href: '#' }
    ],
    blog: [
      { name: 'Blog', href: '#' },
      { name: 'Blog detail', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: '404', href: '#' },
      { name: 'Coming Soon', href: '#' },
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lexend-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">lexend</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Request a demo</h3>
            <ul className="space-y-2">
              {footerLinks.account.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Blog</h3>
            <ul className="space-y-2">
              {footerLinks.blog.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Lexend © 2025. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy notice
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
