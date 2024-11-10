import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, Loader } from 'lucide-react';

const Dashboard = () => {
  const [topCompanies, setTopCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setTopCompanies([
        { id: 1, name: 'EcoTech Solutions', score: 92, change: 5 },
        { id: 2, name: 'SustainaCorp', score: 88, change: -2 },
        { id: 3, name: 'GreenEnergy Inc.', score: 85, change: 3 },
        { id: 4, name: 'EthicalFinance Ltd.', score: 82, change: 1 },
        { id: 5, name: 'CleanFuture Group', score: 80, change: -1 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ESG Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Top ESG Performers">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader className="animate-spin" />
            </div>
          ) : (
            <ul>
              {topCompanies.map((company) => (
                <li key={company.id} className="mb-4">
                  <Link to={`/company/${company.id}`} className="flex items-center justify-between hover:bg-gray-100 p-2 rounded transition-colors">
                    <span className="font-medium">{company.name}</span>
                    <div className="flex items-center">
                      <span className={`font-bold ${company.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {company.score}
                      </span>
                      {company.change >= 0 ? (
                        <ArrowUpRight className="text-green-600 ml-1" size={16} />
                      ) : (
                        <ArrowDownRight className="text-red-600 ml-1" size={16} />
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </DashboardCard>
        <DashboardCard title="Recent News">
          <p className="text-gray-600">Latest ESG news and updates will be displayed here.</p>
        </DashboardCard>
        <DashboardCard title="ESG Trends">
          <p className="text-gray-600">Visualizations of ESG trends will be shown here.</p>
        </DashboardCard>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default Dashboard;