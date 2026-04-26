export const JOB_TYPES = ['Onsite', 'Remote', 'Hybrid'];

export const STATUS_OPTIONS = [
  { label: 'Applied', value: 'Applied', color: '#e0f2fe', textColor: '#0369a1' },     // light blue
  { label: 'Interviewed', value: 'Interviewed', color: '#fef9c3', textColor: '#854d0e' }, // light yellow
  { label: 'Offered', value: 'Offered', color: '#f0fdf4', textColor: '#166534' },     // light emerald
  { label: 'Accepted', value: 'Accepted', color: '#dcfce7', textColor: '#15803d' },    // light green
  { label: 'Rejected', value: 'Rejected', color: '#fee2e2', textColor: '#b91c1c' },    // light red
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
