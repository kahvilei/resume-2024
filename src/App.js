import React, { useState, useEffect } from 'react';
import './App.css';
import './ThemeEditor.css';
import Resume from './pages/resume';
import ThemeProvider from './providers/themeProvider';
import ThemeEditor from './editors/themeEditor';

function App() {
  const [resume, setResume] = useState({});
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState({});
  const [theme, setTheme] = useState({});
  const [error, setError] = useState(null);

  const isLocalDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  const baseURL = process.env.PUBLIC_URL || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resumeResponse, themeResponse, configResponse] = await Promise.all([
          fetch(`${baseURL}/settings/resume.json`),
          fetch(`${baseURL}/settings/theme.json`),
          fetch(`${baseURL}/settings/config.json`)
        ]);
        if (!resumeResponse.ok || !themeResponse.ok || !configResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        const resumeData = await resumeResponse.json();
        const themeData = await themeResponse.json();
        const configData = await configResponse.json();
        setResume(resumeData);
        setTheme(themeData);
        setConfig(configData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThemeProvider theme={theme} config={config}>
      <div className="App">
        <ThemeEditor theme={theme} setTheme={setTheme} config={config} />
        <Resume resume={resume} />
      </div>
    </ThemeProvider>
  );
}

export default App;