import React, { createContext, useState, useContext, useEffect } from 'react';
import { getStoredApplications, saveApplications } from '../utils/storage';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);

  useEffect(() => {
    setApplications(getStoredApplications());
  }, []);

  const addApplication = (application) => {
    const updated = [application, ...applications];
    setApplications(updated);
    saveApplications(updated);
  };

  const updateApplication = (updatedApp) => {
    const updated = applications.map(app => app.id === updatedApp.id ? updatedApp : app);
    setApplications(updated);
    saveApplications(updated);
    setEditingApplication(null);
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

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
