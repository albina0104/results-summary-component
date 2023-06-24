import './ResultPanel.scss';
import ResultScore from './ResultScore';

function ResultPanel({ data }) {
  return (
    <section className='result-panel'>
      <h1 className='heading-1'>Your Result</h1>
      <ResultScore data={data} />
      <h2 className='heading-2'>Great</h2>
      <p className='result-panel__text'>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
}

export default ResultPanel;
