export interface Lead {
  id: string;
  businessName: string;
  phoneNumber: string;
  emailAddress: string;
  website: string;
  contactVerified: boolean;
}

export interface SearchParams {
  niche: string;
  location: string;
  emailDomain?: string;
  phonePrefix?: string;
  maxLeads: number;
}

export interface FeedbackData {
  featureRequest: string;
  niche: string;
  rating: number;
}