import './App.scss';
import ResultPanel from './components/ResultPanel';
import SummaryPanel from './components/SummaryPanel';
import Footer from './components/Footer';

function App() {
  const data = require('./data/data.json');
  return (
    <>
      <main className='App'>
        <ResultPanel data={data} />
        <SummaryPanel data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
