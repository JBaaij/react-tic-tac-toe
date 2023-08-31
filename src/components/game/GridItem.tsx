import {GridCellValue, GridValue} from "../../helpers/grid/types";

interface GridItemProps {
    onClick: (value: GridCellValue) => void;
    value: GridCellValue;
}

const GridItem = (props: GridItemProps) => {
    const {onClick, value} = props;
    // bovenstaande is hetzelfde als:
    // const onClick = props.onClick;
    // const value = props.value;
    // kan ook direct in de functie zelf:
    // const GridItem = ({onClick, value}: GridItemProps) => {
    return <div className="grid-item" onClick={() => onClick(value)} >{value.value}</div>
}
export default GridItem;
