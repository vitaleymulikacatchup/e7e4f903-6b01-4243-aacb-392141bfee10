import React from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-normal text-gray-800 mb-2">
              Bad gateway
              <span className="ml-4 inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">
                Error code 502
              </span>
            </h1>
            <p className="text-gray-600">
              Visit{' '}
              <a 
                href="https://cloudflare.com" 
                className="text-cloudflare-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                cloudflare.com
              </a>
              {' '}for more information.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              2025-11-10 15:43:23 UTC
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;