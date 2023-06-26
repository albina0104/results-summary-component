import './SummaryItem.scss';

function SummaryItem({ color, itemData }) {
  return (
    <div className={`${color} summary-item`}>
      <img className='summary-item__icon' src={itemData.icon} alt='' />
      <div className='item-type'>{itemData.category}</div>
      <div>
        <span className='score'>{itemData.score}</span>
        <span className='total-score'>&nbsp;&nbsp;/ 100</span>
      </div>
    </div>
  );
}

export default SummaryItem;
