import { useState } from 'react';
import { JobContext } from './JobContext';
import { getStoredApplications, saveApplications } from '../utils/storage';

export const JobProvider = ({ children }) => {
  const [applications, setApplications] = useState(() => getStoredApplications());
  const [editingApplication, setEditingApplication] = useState(null);

  const addApplication = (application) => {
    const updated = [application, ...applications];
    setApplications(updated);
    saveApplications(updated);
  };

  const updateApplication = (updatedApp, closeForm = true) => {
    const updated = applications.map(app => app.id === updatedApp.id ? updatedApp : app);
    setApplications(updated);
    saveApplications(updated);
    if (closeForm && editingApplication?.id === updatedApp.id) {
      setEditingApplication(null);
    }
  };

  const clearApplications = () => {
    setApplications([]);
    saveApplications([]);
    setEditingApplication(null);
  };

  return (
    <JobContext.Provider value={{ 
      applications, 
      addApplication, 
      updateApplication, 
      clearApplications,
      editingApplication,
      setEditingApplication
    }}>
      {children}
    </JobContext.Provider>
  );
};
