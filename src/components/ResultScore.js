import './ResultScore.scss';

function ResultScore({ data }) {
  const resultSum = data.reduce((sum, value) => sum + value.score, 0);
  const resultAvg = Math.round(resultSum / data.length);

  return (
    <div className='result-score'>
      <p className='result-score__your-score'>{resultAvg}</p>
      <p className='result-score__total-score'>of 100</p>
    </div>
  );
}

export default ResultScore;
