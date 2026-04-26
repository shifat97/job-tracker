import { useState, useMemo } from 'react';
import { City } from 'country-state-city';
import currencyCodes from 'currency-codes';
import { v4 as uuidv4 } from 'uuid';
import { JOB_TYPES, STATUS_OPTIONS, TECH_COUNTRIES } from '../../utils/constants';
import { useJobs } from '../../context/useJobs';
import './ApplicationForm.css';

const getLocalDate = () => {
  const now = new Date();
  return now.toLocaleDateString('en-CA'); // Returns YYYY-MM-DD in local time
};

const INITIAL_FORM_STATE = {
  jobTitle: '',
  companyName: '',
  applicationLink: '',
  jobType: 'Remote',
  country: 'BD',
  city: 'Dhaka',
  appliedDate: getLocalDate(),
  salary: '',
  currency: 'BDT',
  status: 'Applied'
};

const ApplicationForm = ({ onComplete }) => {
  const { addApplication, updateApplication, editingApplication, setEditingApplication } = useJobs();
  const currencies = useMemo(() => currencyCodes.data, []);
  
  const [formData, setFormData] = useState(editingApplication || INITIAL_FORM_STATE);

  // Derived state: cities based on current selected country
  const cities = useMemo(() => {
    if (!formData.country) return [];
    const rawCities = City.getCitiesOfCountry(formData.country);
    if (!rawCities) return [];
    
    return Array.from(new Set(rawCities.map(c => c.name)))
      .map(name => rawCities.find(c => c.name === name))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'country') {
      setFormData(prev => ({ ...prev, [name]: value, city: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingApplication) {
      updateApplication(formData);
    } else {
      const newApp = {
        ...formData,
        id: uuidv4(),
        createdAt: new Date().toISOString()
      };
      addApplication(newApp);
    }
    
    // Reset transient fields if adding
    if (!editingApplication) {
      setFormData(prev => ({
        ...prev,
        jobTitle: '',
        companyName: '',
        applicationLink: '',
        salary: ''
      }));
    }
    onComplete();
  };

  const handleCancel = () => {
    setEditingApplication(null);
  };

  return (
    <div className="form-container">
      <form className="application-form" onSubmit={handleSubmit}>
        <h2 className="form-title">
          {editingApplication ? 'Update Application' : 'Job Application Details'}
        </h2>
        
        <div className="form-grid">
          <div className="form-group">
            <label>Job Title</label>
            <input 
              type="text" 
              name="jobTitle" 
              value={formData.jobTitle} 
              onChange={handleChange} 
              required 
              placeholder="e.g. Senior Frontend Developer"
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
              required 
              placeholder="e.g. Google"
            />
          </div>

          <div className="form-group full-width">
            <label>Application Link</label>
            <input 
              type="url" 
              name="applicationLink" 
              value={formData.applicationLink} 
              onChange={handleChange} 
              required 
              placeholder="https://example.com/job/123"
            />
          </div>

          <div className="form-group">
            <label>Job Type</label>
            <select name="jobType" value={formData.jobType} onChange={handleChange}>
              {JOB_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label>Country</label>
            <select name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select Country</option>
              {TECH_COUNTRIES.map(c => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>City</label>
            <input 
              list="city-suggestions"
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              placeholder={formData.country ? "Start typing city..." : "Select country first"}
              required 
              disabled={!formData.country}
              autoComplete="off"
            />
            <datalist id="city-suggestions">
              {cities.map((c, index) => (
                <option key={`${c.name}-${index}`} value={c.name} />
              ))}
            </datalist>
          </div>

          <div className="form-group">
            <label>Applied Date</label>
            <input 
              type="date" 
              name="appliedDate" 
              value={formData.appliedDate} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group salary-group">
            <label>Salary Range</label>
            <div className="salary-inputs">
              <input 
                type="text" 
                name="salary" 
                value={formData.salary} 
                onChange={handleChange} 
                placeholder="e.g. 100k - 120k"
              />
              <select name="currency" value={formData.currency} onChange={handleChange}>
                {currencies.map(curr => (
                  <option key={curr.code} value={curr.code}>{curr.code} - {curr.currency}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              {STATUS_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value} style={{ backgroundColor: opt.color }}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editingApplication ? 'Save Changes' : 'Save Application'}
          </button>
          {editingApplication && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
