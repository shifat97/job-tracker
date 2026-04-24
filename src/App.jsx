import React from 'react';
import Header from './components/Header/Header';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import ApplicationTable from './components/ApplicationTable/ApplicationTable';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <div className="dashboard-grid">
          <div className="form-section">
            <ApplicationForm onComplete={() => {}} />
          </div>
          <div className="table-section">
            <ApplicationTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
