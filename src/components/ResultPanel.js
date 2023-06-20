import './ResultPanel.scss';
import ResultScore from './ResultScore';

function ResultPanel() {
  return (
    <section>
      <h1>Your Result</h1>
      <h2>Great</h2>
      <ResultScore />
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
}

export default ResultPanel;
