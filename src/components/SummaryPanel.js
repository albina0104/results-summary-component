import './SummaryPanel.scss';
import SummaryItem from './SummaryItem';
import Button from './Button';

function SummaryPanel() {
  return (
    <section>
      <h2>Summary</h2>
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <Button />
    </section>
  );
}

export default SummaryPanel;
