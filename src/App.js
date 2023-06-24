import './App.scss';
import ResultPanel from './components/ResultPanel';
import SummaryPanel from './components/SummaryPanel';

function App() {
  const data = require('./data/data.json');
  return (
    <div className='App'>
      <ResultPanel data={data} />
      <SummaryPanel data={data} />
    </div>
  );
}

export default App;
