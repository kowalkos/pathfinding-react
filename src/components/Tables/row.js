import Cell from "./cell";
function Row(props) {
  return (
    <div style={{  height: "30px", width: "100%",display:'table',tableLayout:'fixed'}}>
      {[...Array(props.cellNumber)].map((value, index) => (
        <Cell cellNumber={props.cellNumber} id={index + 1} key={index} />
      ))}
    </div>
  );
}
export default Row;
