import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultsTable from './components/ResultsTable';
import FeedbackSection from './components/FeedbackSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Lead, SearchParams, FeedbackData } from './types';
import { generateLeads, submitFeedback } from './services/LeadService';

function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (params: SearchParams) => {
    setIsLoading(true);
    try {
      const results = await generateLeads(params);
      setLeads(results);
    } catch (error) {
      console.error('Error generating leads:', error);
      // In a real app, we would show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitFeedback = async (feedback: FeedbackData) => {
    try {
      await submitFeedback(feedback);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-3xl font-bold text-[#0F2C59] mb-2 text-center">Find Your Ideal Business Leads</h1>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          LeadLynx AI scrapes and filters business leads based on your criteria, 
          helping you find the perfect prospects for your outreach campaigns.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <InputForm onSearch={handleSearch} isLoading={isLoading} />
          </div>
          
          <div className="lg:col-span-3">
            <ResultsTable leads={leads} isLoading={isLoading} />
            <Testimonials />
            <FeedbackSection onSubmitFeedback={handleSubmitFeedback} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;