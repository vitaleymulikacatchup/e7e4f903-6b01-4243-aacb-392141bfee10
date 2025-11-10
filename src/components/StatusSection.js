import React from 'react';
import { Check, X } from 'lucide-react';

function StatusSection() {
  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Browser Status */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <div className="w-20 h-16 bg-gray-400 rounded-lg relative mx-auto">
                <div className="absolute top-2 left-2 right-2 h-2 bg-gray-300 rounded-sm"></div>
                <div className="absolute top-5 left-2 right-2 bottom-2 bg-white rounded-sm flex items-center justify-center">
                  <div className="status-icon status-icon-check">
                    <Check className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">You</h3>
            <h4 className="text-gray-medium font-medium mb-2">Browser</h4>
            <span className="text-success-green font-medium">Working</span>
          </div>

          {/* Cloudflare Status */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <div className="w-20 h-16 bg-gray-400 rounded-full relative mx-auto flex items-center justify-center">
                <div className="status-icon status-icon-check">
                  <Check className="w-8 h-8" />
                </div>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Stockholm</h3>
            <h4 className="text-cloudflare-blue font-medium mb-2">Cloudflare</h4>
            <span className="text-success-green font-medium">Working</span>
          </div>

          {/* Host Status */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <div className="w-20 h-16 bg-gray-400 rounded-lg relative mx-auto flex items-center justify-center">
                <div className="status-icon status-icon-error">
                  <X className="w-8 h-8" />
                </div>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">sargas.io</h3>
            <h4 className="text-gray-medium font-medium mb-2">Host</h4>
            <span className="text-error-red font-medium">Error</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatusSection;