import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader, TrendingUp, TrendingDown } from 'lucide-react';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setPortfolio([
        { id: 1, name: 'EcoTech Solutions', allocation: 25, esgScore: 92, performance: 15.3 },
        { id: 2, name: 'SustainaCorp', allocation: 20, esgScore: 88, performance: -2.7 },
        { id: 3, name: 'GreenEnergy Inc.', allocation: 15, esgScore: 85, performance: 8.9 },
        { id: 4, name: 'EthicalFinance Ltd.', allocation: 20, esgScore: 82, performance: 5.2 },
        { id: 5, name: 'CleanFuture Group', allocation: 20, esgScore: 80, performance: -1.5 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your ESG Portfolio</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESG Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {portfolio.map((company) => (
              <tr key={company.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/company/${company.id}`} className="text-blue-600 hover:underline">{company.name}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{company.allocation}%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {company.esgScore}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center ${company.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {company.performance >= 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                    {company.performance}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;