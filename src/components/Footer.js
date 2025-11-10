import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center text-sm text-gray-500">
          <p>
            Cloudflare Ray ID:{' '}
            <span className="font-mono">99c6aa4ceb6a5190</span>
            {' '}•{' '}
            Your IP:{' '}
            <button className="text-cloudflare-blue hover:underline">
              Click to reveal
            </button>
            {' '}•{' '}
            Performance & security by{' '}
            <a 
              href="https://cloudflare.com" 
              className="text-cloudflare-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;