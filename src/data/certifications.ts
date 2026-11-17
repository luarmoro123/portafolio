export interface Certification {
  title: string;
  issuer: string;
  /** AAAA-MM-DD */
  date: string;
  credentialUrl: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    title: 'HTML Essentials',
    issuer: 'Cisco',
    date: '2025-11-01',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/6f6332f9-cd10-4dc7-8c3b-0f57f4117bec',
    logo: 'https://images.credly.com/images/b1c17d0c-e76b-45fc-9b28-87b01ae1caf3/blob',
  },
  {
    title: 'CSS Essentials',
    issuer: 'Cisco',
    date: '2025-11-01',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/973e0f1e-6d8c-458b-bc44-cfb867a5f064',
    logo: 'https://images.credly.com/images/bd2bba36-66ad-4de2-9d91-e29433e51a16/blob',
  },
  {
    title: 'Network Technician Career Path',
    issuer: 'Cisco',
    date: '2025-04-27',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/4207f171-28b8-4639-bcd1-8ef1993cf337',
    logo: 'https://images.credly.com/images/978f88dc-c247-4093-9d39-6efac3651297/image.png',
  },
];
