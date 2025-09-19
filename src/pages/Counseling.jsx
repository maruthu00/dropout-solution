import React from 'react';

// SVG Icons for visual appeal
const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 8.29V14a1 1 0 001 1h8a1 1 0 001-1V8.29l1.394-1.37a1 1 0 000-1.84l-7-3zM6 9.29V14h2v-4.71L6 9.29zm8 4.71h-2V9.29L14 8v6z" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zm-2 4h4v1h-4V6zM8 8v1h4V8H8z" clipRule="evenodd" />
  </svg>
);


function Counseling() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Personalized Counseling & Support
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Guiding students toward academic, personal, and professional success with confidential and expert support.
          </p>
        </div>

        {/* Counseling Services Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Counseling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Academic Counseling Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <AcademicCapIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">Academic Counseling</h3>
              <p className="text-gray-600 text-center">
                Develop effective study habits, manage academic stress, and set achievable educational goals to unlock your full potential.
              </p>
            </div>

            {/* Personal Counseling Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <HeartIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">Personal & Emotional Support</h3>
              <p className="text-gray-600 text-center">
                Navigate personal challenges and improve well-being with confidential support for stress, anxiety, and life transitions.
              </p>
            </div>

            {/* Career Counseling Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <BriefcaseIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">Career Guidance</h3>
              <p className="text-gray-600 text-center">
                Explore career paths, identify your strengths, and prepare for your future with expert guidance on resumes, interviews, and more.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-24 bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How Our Counseling Process Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
                <div className="flex-1 space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">1</div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-gray-800">Initial Assessment</h4>
                            <p className="text-gray-600 mt-1">We start with a confidential consultation to understand your unique needs and goals.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">2</div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-gray-800">Personalized Plan</h4>
                            <p className="text-gray-600 mt-1">Our AI system and expert counselors create a tailored support plan just for you.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">3</div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-gray-800">Ongoing Sessions</h4>
                            <p className="text-gray-600 mt-1">Engage in regular one-on-one sessions with a dedicated counselor.</p>
                        </div>
                    </div>
                </div>
                 <div className="flex-1">
                    <img src="https://placehold.co/500x300/E9D5FF/3730A3?text=Support+Illustration" alt="Counseling Process" className="rounded-lg shadow-md" />
                 </div>
            </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Ready to Take the Next Step?</h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-600">
                Schedule a confidential session with one of our expert counselors today.
            </p>
            <div className="mt-8">
                <button className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
                    Book a Session
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Counseling;
