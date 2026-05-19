export const JOB_TYPES = ['Onsite', 'Remote', 'Hybrid'];

export const STATUS_OPTIONS = [
  { label: 'Applied', value: 'Applied', color: '#1e293b', textColor: '#38bdf8' },     // Slate 800, Sky 400
  { label: 'Interviewed', value: 'Interviewed', color: '#334155', textColor: '#fbbf24' }, // Slate 700, Amber 400
  { label: 'Offered', value: 'Offered', color: '#064e3b', textColor: '#34d399' },     // Emerald 900, Emerald 400
  { label: 'Accepted', value: 'Accepted', color: '#14532d', textColor: '#4ade80' },    // Green 900, Green 400
  { label: 'Rejected', value: 'Rejected', color: '#450a0a', textColor: '#f87171' },    // Red 950, Red 400
];

export const TECH_COUNTRIES = [
  { code: 'BD', name: 'Bangladesh' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'SE', name: 'Sweden' },
  { code: 'NO', name: 'Norway' },
  { code: 'DK', name: 'Denmark' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'FR', name: 'France' },
  { code: 'EE', name: 'Estonia' },
  { code: 'IN', name: 'India' },
  { code: 'SG', name: 'Singapore' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'AU', name: 'Australia' },
  { code: 'AE', name: 'United Arab Emirates' },
].sort((a, b) => a.name.localeCompare(b.name));

export const STORAGE_KEY = 'job_tracker_applications';
