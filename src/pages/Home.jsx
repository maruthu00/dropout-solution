import React from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaShieldAlt, FaUsers } from 'react-icons/fa';

//Data for feature cards
const featuresData = [
  {
    icon: <FaBrain size={28} />,
    gradient: 'from-blue-500 to-cyan-400',
    title: 'AI-Powered Predictions',
    description: 'Advanced machine learning algorithms analyze multiple data points to predict dropout risk with high accuracy.',
  },
  {
    icon: <FaShieldAlt size={28} />,
    gradient: 'from-emerald-500 to-green-400',
    title: 'Early Intervention',
    description: 'Identify at-risk students early and implement targeted support strategies before it’s too late.',
  },
  {
    icon: <FaUsers size={28} />,
    gradient: 'from-indigo-500 to-sky-500',
    title: 'Collaborative Support',
    description: 'Connect mentors, counselors, and administrators in a unified platform for student success.',
  },
];

const FeatureCard = ({ icon, gradient, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
      {/* Icon with Gradient Background */}
      <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${gradient}`}>
        {icon}
      </div>
      
      {/* Card Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      
      {/* Card Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Transforming Education with AI
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our comprehensive platform combines cutting-edge technology with educational expertise to ensure no student falls through the cracks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              gradient={feature.gradient}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- SVG Icon Components ---
const StudentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-purple-600 mb-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
    <path d="M10.394 11.082l-4.394.878V14h3v5h2v-5h3v-2.04l-4-1.04z" />
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-red-500 mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.536 8.464a5 5 0 11-7.072 0 5 5 0 017.072 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12a3 3 0 110-6 3 3 0 010 6z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-green-500 mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// --- Reusable Stat Card Component ---
const StatCard = ({ icon, value, label }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2">
    {icon}
    <p className="text-3xl font-bold text-gray-800">{value}</p>
    <p className="text-gray-500 mt-1">{label}</p>
  </div>
);

// --- "How It Works" Section Component ---
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description:
        "Integrate attendance, grades, assignments, and behavioral data from your existing systems.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our machine learning algorithms analyze patterns and identify early warning indicators.",
    },
    {
      number: "03",
      title: "Risk Assessment",
      description:
        "Students are categorized into risk levels with color-coded visual indicators.",
    },
    {
      number: "04",
      title: "Intervention",
      description:
        "Automated alerts to counselors and personalized support recommendations.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            How EduGuard Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI system continuously analyzes multiple data points to provide
            early warning signs and actionable insights for student success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center p-8">
            <img
              src="https://placehold.co/600x450/00c6ff/FFFFFF?text=AI+Powered+Insights"
              alt="AI Analysis Brain"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Home Page Component ---
function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-400 text-white text-center py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            EduGuard
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Predict, Prevent, and Support – AI-powered dropout prediction &
            counseling system
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/features"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Features →
            </Link>

            <Link
              to="/login"
              className="bg-gray-800 bg-opacity-40 text-white font-semibold px-8 py-3 rounded-lg border border-white hover:bg-opacity-60 transition-all duration-300 transform hover:scale-105"
            >
              View Demo Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 z-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={<StudentIcon />}
              value="25,000+"
              label="Students Monitored"
            />
            <StatCard
              icon={<TargetIcon />}
              value="94.5%"
              label="Prediction Accuracy"
            />
            <StatCard
              icon={<CheckIcon />}
              value="3,200+"
              label="Successful Interventions"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />
        <FeaturesSection />
      {/* You can add more sections here */}
      {/* For example: <TestimonialsSection /> etc. */}
    </div>
  );
}

export default Home;
