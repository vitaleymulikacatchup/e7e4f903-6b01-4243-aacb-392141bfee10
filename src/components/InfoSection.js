import React from 'react';

function InfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What happened */}
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              What happened?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The web server reported a bad gateway error.
            </p>
          </div>

          {/* What can I do */}
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              What can I do?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Please try again in a few minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;