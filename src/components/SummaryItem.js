import './SummaryItem.scss';

function SummaryItem({ color, itemData }) {
  return (
    <div className={`${color} summary-item`}>
      <img className='summary-item__icon' src={itemData.icon} alt='' />
      <div className='summary-item__type'>{itemData.category}</div>
      <div>
        <span className='summary-item__score'>{itemData.score}</span>
        <span className='summary-item__total-score'>&nbsp;&nbsp;/ 100</span>
      </div>
    </div>
  );
}

export default SummaryItem;
