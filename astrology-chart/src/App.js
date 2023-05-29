import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <ParentComponent />
    </div>
  );
}

export default App;
