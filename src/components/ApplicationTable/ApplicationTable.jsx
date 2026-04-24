import React from 'react';
import { ExternalLink, Trash2, Edit2 } from 'lucide-react';
import { useJobs } from '../../context/JobContext';
import { STATUS_OPTIONS } from '../../utils/constants';
import './ApplicationTable.css';

const ApplicationTable = () => {
  const { applications, clearApplications, setEditingApplication } = useJobs();

  const getStatusStyle = (status) => {
    const option = STATUS_OPTIONS.find(opt => opt.value === status);
    return {
      backgroundColor: option?.color || '#f3f4f6',
      color: option?.textColor || '#374151'
    };
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all applications? This cannot be undone.')) {
      clearApplications();
    }
  };

  if (applications.length === 0) {
    return (
      <div className="empty-state">
        <p>No applications found. Start by adding one!</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="application-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Type</th>
              <th>Location</th>
              <th>Applied Date</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="font-bold">{app.jobTitle}</td>
                <td>{app.companyName}</td>
                <td>{app.jobType}</td>
                <td>{app.city}, {app.country}</td>
                <td>{app.appliedDate}</td>
                <td>{app.salary ? `${app.salary} ${app.currency}` : 'N/A'}</td>
                <td>
                  <span className="status-badge" style={getStatusStyle(app.status)}>
                    {app.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <div className="action-buttons">
                    <button 
                      className="action-btn edit" 
                      onClick={() => setEditingApplication(app)}
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <a 
                      href={app.applicationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn link"
                      title="Open Link"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-actions">
        <button className="clear-btn" onClick={handleClear}>
          <Trash2 size={18} />
          Clear All Data
        </button>
      </div>
    </div>
  );
};

export default ApplicationTable;
