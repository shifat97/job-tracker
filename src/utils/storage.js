import { STORAGE_KEY } from './constants';

export const getStoredApplications = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveApplications = (applications) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
};
