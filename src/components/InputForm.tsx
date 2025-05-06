import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchParams } from '../types';

interface InputFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch, isLoading }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    niche: '',
    location: '',
    emailDomain: '',
    phonePrefix: '',
    maxLeads: 50,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: name === 'maxLeads' ? parseInt(value) || 1 : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#0F2C59] mb-4">Find Your Leads</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-1">
            Business Niche*
          </label>
          <input
            type="text"
            id="niche"
            name="niche"
            placeholder="e.g. Plumber, Dentist, Lawyer"
            value={searchParams.niche}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location*
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Melbourne, New York, London"
            value={searchParams.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="emailDomain" className="block text-sm font-medium text-gray-700 mb-1">
              Email Domain Filter (Optional)
            </label>
            <input
              type="text"
              id="emailDomain"
              name="emailDomain"
              placeholder="e.g. gmail.com"
              value={searchParams.emailDomain}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
            />
          </div>
          
          <div>
            <label htmlFor="phonePrefix" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Prefix Filter (Optional)
            </label>
            <input
              type="text"
              id="phonePrefix"
              name="phonePrefix"
              placeholder="e.g. 04"
              value={searchParams.phonePrefix}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="maxLeads" className="block text-sm font-medium text-gray-700 mb-1">
            Max Leads to Collect
          </label>
          <input
            type="number"
            id="maxLeads"
            name="maxLeads"
            min="1"
            max="500"
            value={searchParams.maxLeads}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#36B37E] hover:bg-[#2E9D6E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#36B37E] transition duration-200 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Find My Leads
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;