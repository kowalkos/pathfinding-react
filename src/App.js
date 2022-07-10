import logo from './logo.svg';
import './App.css';
import Table from './components/Tables/table';
function App() {
  return (
    <div className="App">
     <Table rowNumber={25} cellNumber={50}></Table>
    </div>
  );
}

export default App;
