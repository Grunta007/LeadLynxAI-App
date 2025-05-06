import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Lead } from '../types';

interface ResultsTableProps {
  leads: Lead[];
  isLoading: boolean;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ leads, isLoading }) => {
  const downloadCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['Business Name', 'Phone Number', 'Email Address', 'Website', 'Contact Verified'];
    const csvContent = [
      headers.join(','),
      ...leads.map(lead => [
        `"${lead.businessName.replace(/"/g, '""')}"`,
        `"${lead.phoneNumber.replace(/"/g, '""')}"`,
        `"${lead.emailAddress.replace(/"/g, '""')}"`,
        `"${lead.website.replace(/"/g, '""')}"`,
        lead.contactVerified ? 'Yes' : 'No'
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    link.setAttribute('href', url);
    link.setAttribute('download', `leadlynx-leads-${timestamp}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0F2C59] mb-4"></div>
        <p className="text-gray-600">Searching for your leads...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#0F2C59]">Lead Results</h2>
        {leads.length > 0 && (
          <button
            onClick={downloadCSV}
            className="flex items-center text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition"
          >
            <Download className="h-4 w-4 mr-1" />
            Export CSV
          </button>
        )}
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500 mb-2">No leads found.</p>
          <p className="text-gray-400 text-sm">Try a broader niche or nearby location.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Website
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Verified
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lead.businessName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead.emailAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                    <a href={lead.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Visit
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${lead.contactVerified ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {lead.contactVerified ? 'Yes' : 'No'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;