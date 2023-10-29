import { GridCellValue, GridValue } from '../../helpers/grid/types';
import IconX from '../icons/IconX';
import IconO from '../icons/IconO';
interface GridItemProps {
  onClick: (value: GridCellValue) => void;
  value: GridCellValue;
}

const GridItem = (props: GridItemProps) => {
  const { onClick, value } = props;
  // bovenstaande is hetzelfde als:
  // const onClick = props.onClick;
  // const value = props.value;
  // kan ook direct in de functie zelf:
  // const GridItem = ({onClick, value}: GridItemProps) => {

  let content: React.ReactNode =
    value.value === 1 ? (
      <IconX width={40} height={40} />
    ) : value.value === 2 ? (
      <IconO width={40} height={40} />
    ) : null;

  return (
    <div
      style={{
        color: 'white',
        fontWeight: 'bold',
        userSelect: 'none',
        cursor: 'pointer',
      }}
      className="grid-item"
      onClick={() => {
        onClick(value);
      }}>
      {content}
    </div>
  );
};
export default GridItem;
