import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Leaf, Users, Building } from 'lucide-react';

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setCompany({
        id,
        name: 'EcoTech Solutions',
        description: 'A leading provider of sustainable technology solutions.',
        esg: {
          environmental: 95,
          social: 88,
          governance: 92
        },
        initiatives: [
          'Carbon neutrality by 2025',
          'Sustainable supply chain program',
          'Diversity and inclusion training for all employees'
        ]
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{company.name}</h1>
      <p className="text-gray-600 mb-8">{company.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ESGScoreCard title="Environmental" score={company.esg.environmental} icon={<Leaf />} />
        <ESGScoreCard title="Social" score={company.esg.social} icon={<Users />} />
        <ESGScoreCard title="Governance" score={company.esg.governance} icon={<Building />} />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key ESG Initiatives</h2>
        <ul className="list-disc pl-5">
          {company.initiatives.map((initiative, index) => (
            <li key={index} className="mb-2">{initiative}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ESGScoreCard = ({ title, score, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <div className="text-blue-600 mb-2">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="text-3xl font-bold text-blue-600">{score}</div>
  </div>
);

export default CompanyDetails;