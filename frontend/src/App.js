import React, { useState } from 'react';
import './App.css';
import DateInput from './components/DateInput';
import TriangleCard from './components/TriangleCard';
import CountsCard from './components/CountsCard';
import ExtrasCard from './components/ExtrasCard';
import NOQRCard from './components/NOQRCard';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (dates) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/triangle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dates }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate triangle');
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Mystical Triangle</h1>
        <p>Enter 3 dates to reveal the numerological pattern</p>
      </header>

      <main className="app-main">
        <DateInput onGenerate={handleGenerate} />

        {error && <div className="error-banner">{error}</div>}

        {loading && <div className="loading-spinner">Analyzing numbers...</div>}

        {result && (
          <div className="results-grid">
            <TriangleCard values={result.values} />
            <div className="side-cards">
              <CountsCard counts={result.counts} />
              <ExtrasCard extras={result.extras} values={result.values} />
              <NOQRCard values={result.values} has7={result.extras.has7} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
