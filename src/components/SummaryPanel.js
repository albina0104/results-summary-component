import './SummaryPanel.scss';
import SummaryItem from './SummaryItem';
import Button from './Button';

function SummaryPanel({ data }) {
  return (
    <section className='summary-panel'>
      <h2 className='summary-panel__heading'>Summary</h2>
      <SummaryItem color='red' itemData={data[0]} />
      <SummaryItem color='yellow' itemData={data[1]} />
      <SummaryItem color='teal' itemData={data[2]} />
      <SummaryItem color='blue' itemData={data[3]} />
      <Button />
    </section>
  );
}

export default SummaryPanel;
