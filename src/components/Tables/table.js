import Row from "./row";
function Table(props) {
  return (
    <div>
      {[...Array(props.rowNumber)].map((value, index) => (
        <Row cellNumber={props.cellNumber} id={index + 1} key={index} />
      ))}
    </div>
  );
}
export default Table;
