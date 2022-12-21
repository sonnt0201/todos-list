import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import { TodoTable } from './TodoTable';
import { manager } from './Manager';
function App() {
  return (
    <div className="App">
      <NavBar manager = {manager}/>
      <TodoTable/>
    </div>
  );
}

export default App;
