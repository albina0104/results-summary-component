import './App.scss';
import ResultPanel from './components/ResultPanel';
import SummaryPanel from './components/SummaryPanel';

function App() {
  const data = require('./data/data.json');
  return (
    <main className='App'>
      <ResultPanel data={data} />
      <SummaryPanel data={data} />
    </main>
  );
}

export default App;
