import './App.css';
import Calendar from './components/Calendar';

function App() {
  const now = new Date(2017, 2, 8);

  return (
    <div className="App">
      <Calendar date={now} />
    </div>
  );
}

export default App;