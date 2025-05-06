import { Lead, SearchParams, FeedbackData } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getRealLeads = async (params: SearchParams): Promise<Lead[]> => {
  // Placeholder for real implementation
  // This will be replaced with actual scraping logic later
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
  
  const count = Math.min(params.maxLeads, 20);
  const mockLeads: Lead[] = Array.from({ length: count }, (_, i) => ({
    id: uuidv4(),
    businessName: `${params.niche} ${['Solutions', 'Services', 'Experts', 'Pro', 'Master'][Math.floor(Math.random() * 5)]} ${params.location} ${i + 1}`,
    phoneNumber: `+1-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
    emailAddress: `contact@${params.niche.toLowerCase().replace(/\s+/g, '')}-${location.toLowerCase()}${i + 1}.com`,
    website: `https://www.${params.niche.toLowerCase().replace(/\s+/g, '')}-${location.toLowerCase()}${i + 1}.com`,
    contactVerified: true
  }));

  return mockLeads;
};

export const generateLeads = async (params: SearchParams): Promise<Lead[]> => {
  try {
    const leads = await getRealLeads(params);
    
    // Apply filters if specified
    let filteredLeads = leads;
    
    if (params.emailDomain) {
      filteredLeads = filteredLeads.filter(lead => 
        lead.emailAddress.endsWith(params.emailDomain || '')
      );
    }
    
    if (params.phonePrefix) {
      filteredLeads = filteredLeads.filter(lead => 
        lead.phoneNumber.includes(params.phonePrefix || '')
      );
    }

    return filteredLeads;
  } catch (error) {
    console.error('Error generating leads:', error);
    throw error;
  }
};

export const submitFeedback = async (feedbackData: FeedbackData): Promise<void> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, this would send data to a backend API
  console.log('Feedback submitted:', feedbackData);
  
  return Promise.resolve();
};