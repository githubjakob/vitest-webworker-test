import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = () => {
    setLoading(true);

    const worker = new Worker(new URL('./worker.js', import.meta.url));

    worker.postMessage({ number: input });

    worker.onmessage = function (e) {
      setResult(e.data);
      setLoading(false);
    };

    worker.onerror = function (e) {
      console.error('Error in worker:', e.message);
      setLoading(false);
    };
  };

  return (
    <div>
      <h2>Fibonacci Calculator (Using Web Worker)</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {loading ? <p>Loading...</p> : <p>Result: {result}</p>}
    </div>
  );
}

export default App
