import './App.css';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { MovieProvider } from './utils/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
