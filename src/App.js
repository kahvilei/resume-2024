import React, { useState, useEffect } from 'react';
import './App.css';
import Resume from './pages/resume';

function App() {
  const [resume, setResume] = useState({});
  const [loading, setLoading] = useState(true);
  //load resume from / of site using a request, we will move resume later. Use transition
  useEffect(() => {
    fetch('./resume.json')
      .then((response) => response.json())
      .then((data) => {
        setResume(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="App">
      <Resume resume={resume} />
    </div>
  );
}

export default App;
