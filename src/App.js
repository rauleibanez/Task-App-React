import './App.css';
import logo from './images/favicon.ico';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-container'>
        <img 
        className='logo'
        src={logo}
        alt='logo de la aplicacion'  
        />        
      </div>
      <div className='lista-tareas-principal'>
        <h1>Mis Tareas</h1>
        <TaskList/>        
      </div>
    </div>
  );
}

export default App;
