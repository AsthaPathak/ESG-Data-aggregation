import React from 'react';
import { Shield, BarChart2, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About ESG Insight</h1>
      <p className="text-gray-600 mb-8">
        ESG Insight is a cutting-edge platform that aggregates real-time Environmental, Social, and Governance (ESG) data from public reports, news sources, and sensors. Our mission is to empower investors with comprehensive information to track the social and environmental impact of their investments.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Globe className="text-blue-600" size={32} />}
          title="Environmental Impact"
          description="Track companies' efforts in reducing carbon footprint, waste management, and sustainable resource usage."
        />
        <FeatureCard
          icon={<Users className="text-blue-600" size={32} />}
          title="Social Responsibility"
          description="Evaluate corporate policies on diversity, labor practices, human rights, and community engagement."
        />
        <FeatureCard
          icon={<Shield className="text-blue-600" size={32} />}
          title="Governance Standards"
          description="Assess company leadership, executive compensation, audits, internal controls, and shareholder rights."
        />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Our Data Sources</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Public company reports and filings</li>
        <li>Real-time news aggregation</li>
        <li>Environmental sensors and IoT devices</li>
        <li>Social media sentiment analysis</li>
        <li>Government and NGO databases</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Why Choose ESG Insight?</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-2">
          <li className="flex items-center">
            <BarChart2 className="text-green-600 mr-2" size={20} />
            <span>Comprehensive ESG scoring and analysis</span>
          </li>
          <li className="flex items-center">
            <RefreshCw className="text-green-600 mr-2" size={20} />
            <span>Real-time data updates</span>
          </li>
          <li className="flex items-center">
            <TrendingUp className="text-green-600 mr-2" size={20} />
            <span>Performance tracking and benchmarking</span>
          </li>
          <li className="flex items-center">
            <PieChart className="text-green-600 mr-2" size={20} />
            <span>Customizable portfolio analysis</span>
          </li>
          <li className="flex items-center">
            <AlertTriangle className="text-green-600 mr-2" size={20} />
            <span>ESG risk assessment and alerts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;